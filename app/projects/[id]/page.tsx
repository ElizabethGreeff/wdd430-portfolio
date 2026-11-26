import { cache, Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/projects-db";

type Props = { params: Promise<{ id: string }> };

const getProject = cache(async (idParam: string) => {
    const id = Number(idParam);
    return Number.isInteger(id) ? getProjectById(id) : null;
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const project = await getProject(id);

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested portfolio project could not be found.",
        };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: { title: project.title, description: project.description },
    };
}

async function ProjectDetail({ params }: Props) {
    const { id } = await params;
    const project = await getProject(id);

    if (!project) {
        notFound();
    }

    return (
        <article className="bg-white shadow-sm rounded-xl p-6 border border-[#f0d5d9]">
            <h1 className="text-3xl font-bold text-[#3d2c2e] mb-4">{project.title}</h1>
            <p className="text-[#6b4f52] mb-4 leading-relaxed">{project.description}</p>
            {project.year_completed && (
                <p className="text-sm text-[#6b4f52] mb-4">Completed: {project.year_completed}</p>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="bg-[#f5e6e8] text-[#5c3a3f] text-sm font-medium px-3 py-1 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[#e8a0a8] text-white hover:bg-[#d48992] transition-colors"
                >
                    View Project
                </a>
            )}
        </article>
    );
}

export default function ProjectPage(props: Props) {
    return (
        <div>
            <Link href="/projects" className="mb-6 inline-block text-sm text-[#3d2c2e] underline">
                &larr; Back to projects
            </Link>
            <Suspense fallback={<p className="text-[#6b4f52]">Loading project...</p>}>
                <ProjectDetail params={props.params} />
            </Suspense>
        </div>
    );
}