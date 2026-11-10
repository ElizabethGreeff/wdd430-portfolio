import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/projects-db";

export default async function SchoolPage() {
    const projects = await getProjects("school");

    return (
        <div>
            <h1 className="text-3xl font-bold text-[#3d2c2e] mb-6">School Projects</h1>
            <p className="text-[#6b4f52] mb-8">
                Projects completed as part of my coursework.
            </p>

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
        </div>
    );
}