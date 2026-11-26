import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectForm from "@/components/ProjectForm";
import { updateProject } from "@/app/lib/actions";
import { getProjectById } from "@/lib/projects-db";

export const metadata: Metadata = { title: "Edit Project", robots: { index: false } };

async function EditProjectForm({ params }: { params: Promise<{ id: string }> }) {
    const { id: idParam } = await params;
    const id = Number(idParam);
    const project = Number.isInteger(id) ? await getProjectById(id) : null;

    if (!project) {
        notFound();
    }

    return (
        <ProjectForm
            action={updateProject.bind(null, id)}
            project={project}
            submitLabel="Save Changes"
        />
    );
}

export default function EditProjectPage(props: { params: Promise<{ id: string }> }) {
    return (
        <div>
            <h1 className="text-3xl font-bold text-[#3d2c2e] mb-6">Edit Project</h1>
            <Suspense fallback={<p className="text-[#6b4f52]">Loading project...</p>}>
                <EditProjectForm params={props.params} />
            </Suspense>
        </div>
    );
}