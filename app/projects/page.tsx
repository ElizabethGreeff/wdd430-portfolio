import { Suspense } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectSearch from "@/components/ProjectSearch";
import Pagination from "@/components/Pagination";
import { fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-db";

type SearchParams = Promise<{ query?: string; page?: string }>;

async function ProjectsResults({ searchParams }: { searchParams: SearchParams }) {
    const params = await searchParams;

    const query = (params.query ?? "").trim().slice(0, 100);
    const requestedPage = Math.max(1, Math.floor(Number(params.page)) || 1);

    const totalPages = await fetchProjectsPages(query);
    const currentPage = Math.min(requestedPage, Math.max(totalPages, 1));
    const projects = await fetchFilteredProjects(query, currentPage);

    if (projects.length === 0) {
        return (
            <p className="text-[#6b4f52]">
                No projects found{query ? ` for "${query}"` : ""}.
            </p>
        );
    }

    return (
        <>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link}
                    />
                ))}
            </div>
            <Pagination totalPages={totalPages} />
        </>
    );
}

export default function ProjectsPage(props: { searchParams: SearchParams }) {
    return (
        <div>
            <h1 className="text-3xl font-bold text-[#3d2c2e] mb-6">Projects Overview</h1>
            <p className="text-[#6b4f52] mb-6">
                All projects (open source + school).
            </p>

            <div className="mb-8">
                <Suspense fallback={<div className="h-10 rounded-full bg-[#f5e6e8]" />}>
                    <ProjectSearch />
                </Suspense>
            </div>

            <Suspense fallback={<p className="text-[#6b4f52]">Loading projects...</p>}>
                <ProjectsResults searchParams={props.searchParams} />
            </Suspense>
        </div>
    );
}