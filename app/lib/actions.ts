'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type State = {
    errors?: {
        title?: string[];
        description?: string[];
        technologies?: string[];
        type?: string[];
        yearCompleted?: string[];
    };
    message?: string | null;
    values?: Record<string, string>;
};

function buildSchema() {
    const currentYear = new Date().getFullYear();
    return z.object({
        title: z.string().min(3, 'Title must be at least 3 characters.'),
        description: z.string().min(20, 'Description must be at least 20 characters.'),
        technologies: z
            .string()
            .min(2, 'Add at least one technology.')
            .refine(
                (value) => value.split(',').some((t) => t.trim() !== ''),
                'Add at least one technology.'
            ),
        type: z.enum(['opensource', 'school'], { message: 'Choose a project type.' }),
        yearCompleted: z.coerce
            .number()
            .int('Year must be a whole number.')
            .gte(2000, 'Year must be 2000 or later.')
            .lte(currentYear, `Year cannot be greater than ${currentYear}.`),
    });
}

function validateForm(formData: FormData) {
    const parsed = buildSchema().safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        technologies: formData.get('technologies'),
        type: formData.get('type'),
        yearCompleted: formData.get('yearCompleted'),
    });

    if (parsed.success) {
        return { ok: true as const, data: parsed.data };
    }

    const values: Record<string, string> = {};
    for (const key of ['title', 'description', 'technologies', 'type', 'yearCompleted']) {
        values[key] = String(formData.get(key) ?? '');
    }
    return {
        ok: false as const,
        state: {
            errors: parsed.error.flatten().fieldErrors,
            message: 'Missing or invalid fields. Please fix the errors below.',
            values,
        } satisfies State,
    };
}

function splitTechnologies(value: string): string[] {
    return value.split(',').map((t) => t.trim()).filter(Boolean);
}

export async function createProject(_prevState: State, formData: FormData): Promise<State> {
    const result = validateForm(formData);
    if (!result.ok) return result.state;

    const { title, description, type, technologies, yearCompleted } = result.data;
    const techJson = JSON.stringify(splitTechnologies(technologies));

    try {
        await sql`
            INSERT INTO projects (title, description, type, technologies, year_completed)
            VALUES (
                ${title}, ${description}, ${type},
                ARRAY(SELECT jsonb_array_elements_text(${techJson}::jsonb)),
                ${yearCompleted}
            )
        `;
    } catch (error) {
        console.error('Error creating project:', error);
        return { message: 'Database Error: Failed to create project.' };
    }

    revalidatePath('/projects');
    redirect('/projects');
}

export async function updateProject(
    id: number,
    _prevState: State,
    formData: FormData
): Promise<State> {
    const result = validateForm(formData);
    if (!result.ok) return result.state;

    const { title, description, type, technologies, yearCompleted } = result.data;
    const techJson = JSON.stringify(splitTechnologies(technologies));

    try {
        await sql`
            UPDATE projects
            SET title = ${title},
                description = ${description},
                type = ${type},
                technologies = ARRAY(SELECT jsonb_array_elements_text(${techJson}::jsonb)),
                year_completed = ${yearCompleted}
            WHERE id = ${id}
        `;
    } catch (error) {
        console.error('Error updating project:', error);
        return { message: 'Database Error: Failed to update project.' };
    }

    revalidatePath('/projects');
    redirect('/projects');
}

export async function deleteProject(id: number): Promise<void> {
    try {
        await sql`DELETE FROM projects WHERE id = ${id}`;
    } catch (error) {
        console.error('Error deleting project:', error);
        throw new Error('Failed to delete project. Please try again later.');
    }
    revalidatePath('/projects');
}