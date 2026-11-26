import type { Metadata } from "next";
import ProjectForm from "@/components/ProjectForm";
import { createProject } from "@/app/lib/actions";

export const metadata: Metadata = { title: "Add Project", robots: { index: false } };

export default function NewProjectPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-[#3d2c2e] mb-6">Add a Project</h1>
            <ProjectForm action={createProject} submitLabel="Save Project" />
        </div>
    );
}