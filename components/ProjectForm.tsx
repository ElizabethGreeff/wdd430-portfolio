'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import type { State } from '@/app/lib/actions';
import type { Project } from '@/lib/projects-db';

type ProjectFormProps = {
    action: (prevState: State, formData: FormData) => Promise<State>;
    project?: Project;
    submitLabel: string;
};

const initialState: State = { message: null, errors: {} };

const inputClass =
    "block w-full rounded-md border border-[#f0d5d9] bg-white px-3 py-2 text-sm text-[#3d2c2e] outline-none focus:ring-2 focus:ring-[#e8a0a8]";
const labelClass = "mb-2 block text-sm font-medium text-[#3d2c2e]";

function FieldErrors({ id, errors }: { id: string; errors?: string[] }) {
    return (
        <div id={id} aria-live="polite" aria-atomic="true">
            {errors?.map((error) => (
                <p key={error} className="mt-1 text-sm text-red-600">
                    {error}
                </p>
            ))}
        </div>
    );
}

export default function ProjectForm({ action, project, submitLabel }: ProjectFormProps) {
    const [state, formAction, isPending] = useActionState(action, initialState);
    const v = state.values;

    const defaults = {
        title: v?.title ?? project?.title ?? '',
        description: v?.description ?? project?.description ?? '',
        technologies: v?.technologies ?? project?.technologies?.join(', ') ?? '',
        type: v?.type ?? project?.type ?? '',
        yearCompleted:
            v?.yearCompleted ??
            (project?.year_completed ? String(project.year_completed) : ''),
    };

    return (
        <form
            action={formAction}
            className="space-y-4 rounded-xl border border-[#f0d5d9] bg-white p-6 shadow-sm"
        >
            <div>
                <label htmlFor="title" className={labelClass}>Project Title</label>
                <input
                    id="title" name="title" type="text" required
                    defaultValue={defaults.title}
                    className={inputClass}
                    aria-describedby="title-error"
                />
                <FieldErrors id="title-error" errors={state.errors?.title} />
            </div>

            <div>
                <label htmlFor="description" className={labelClass}>Description</label>
                <textarea
                    id="description" name="description" rows={4} required
                    defaultValue={defaults.description}
                    className={inputClass}
                    aria-describedby="description-error"
                />
                <FieldErrors id="description-error" errors={state.errors?.description} />
            </div>

            <div>
                <label htmlFor="technologies" className={labelClass}>
                    Technologies (comma-separated)
                </label>
                <input
                    id="technologies" name="technologies" type="text" required
                    defaultValue={defaults.technologies}
                    className={inputClass}
                    aria-describedby="technologies-error"
                />
                <FieldErrors id="technologies-error" errors={state.errors?.technologies} />
            </div>

            <div>
                <label htmlFor="type" className={labelClass}>Project Type</label>
                <select
                    id="type" name="type" required
                    defaultValue={defaults.type}
                    className={inputClass}
                    aria-describedby="type-error"
                >
                    <option value="">Select a type</option>
                    <option value="opensource">Open source</option>
                    <option value="school">School</option>
                </select>
                <FieldErrors id="type-error" errors={state.errors?.type} />
            </div>

            <div>
                <label htmlFor="yearCompleted" className={labelClass}>Year Completed</label>
                <input
                    id="yearCompleted" name="yearCompleted" type="number"
                    min="2000" max="2099" required
                    defaultValue={defaults.yearCompleted}
                    className={inputClass}
                    aria-describedby="yearCompleted-error"
                />
                <FieldErrors id="yearCompleted-error" errors={state.errors?.yearCompleted} />
            </div>

            <div aria-live="polite" aria-atomic="true">
                {state.message ? (
                    <p className="text-sm text-red-600">{state.message}</p>
                ) : null}
            </div>

            <div className="flex items-center gap-4">
                <button
                    type="submit"
                    disabled={isPending}
                    className="rounded-full bg-[#e8a0a8] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#d48992] disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isPending ? 'Saving...' : submitLabel}
                </button>
                <Link href="/dashboard/projects" className="text-sm text-[#3d2c2e] underline">
                    Cancel
                </Link>
            </div>
        </form>
    );
}