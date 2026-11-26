import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { auth } from "@/auth";
import ProjectCard from "@/components/ProjectCard";
import { SignOutButton } from "@/components/SignOutButton";
import { getProjects } from "@/lib/projects-db";

export const metadata: Metadata = {
    title: "Dashboard",
    robots: { index: false },
};

async function DashboardContent() {
    const session = await auth();
    const projects = await getProjects();

    return (
        <>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-[#6b4f52]">
                    Signed in as {session?.user?.name ?? session?.user?.email}
                </p>
                <div className="flex items-center gap-3">
                    <Link
                        href="/dashboard/projects/new"
                        className="px-4 py-2 rounded-full text-sm font-medium bg-[#e8a0a8] text-white hover:bg-[#d48992] transition-colors"
                    >
                        + Add project
                    </Link>
                    <SignOutButton />
                </div>
            </div>

            {projects.length === 0 ? (
                <p className="text-[#6b4f52]">No projects yet.</p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            link={project.link}
                            showActions
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default function DashboardProjectsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-[#3d2c2e] mb-6">Owner Dashboard</h1>
            <Suspense fallback={<p className="text-[#6b4f52]">Loading...</p>}>
                <DashboardContent />
            </Suspense>
        </div>
    );
}