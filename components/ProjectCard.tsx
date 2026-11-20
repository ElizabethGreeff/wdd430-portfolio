import Link from "next/link";
import { deleteProject } from "@/app/lib/actions";

interface ProjectCardProps {
    id?: number;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({
    id,
    title,
    description,
    technologies,
    link,
}: ProjectCardProps) {
    return (
        <article className="bg-white shadow-sm rounded-xl p-6 border border-[#f0d5d9]">
            <h2 className="text-xl text-[#3d2c2e] font-bold mb-2">{title}</h2>
            <p className="text-[#6b4f52] mb-4 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-[#f5e6e8] text-[#5c3a3f] text-sm font-medium px-3 py-1 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[#e8a0a8] text-white hover:bg-[#d48992] transition-colors"
                >
                    View Project
                </a>
            )}

            {id !== undefined && (
                <div className="mt-4 flex items-center gap-3 border-t border-[#f0d5d9] pt-4">
                    <Link
                        href={`/projects/${id}/edit`}
                        aria-label={`Edit ${title}`}
                        className="px-4 py-2 rounded-full text-sm font-medium border border-[#f0d5d9] text-[#3d2c2e] hover:bg-[#f5e6e8] transition-colors"
                    >
                        Edit
                    </Link>
                    <form action={deleteProject.bind(null, id)}>
                        <button
                            type="submit"
                            aria-label={`Delete ${title}`}
                            className="px-4 py-2 rounded-full text-sm font-medium border border-red-200 text-red-700 hover:bg-red-50 transition-colors"
                        >
                            Delete
                        </button>
                    </form>
                </div>
            )}
        </article>
    );
}