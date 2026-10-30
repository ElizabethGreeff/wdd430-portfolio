interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({
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
        </article>
    );
}