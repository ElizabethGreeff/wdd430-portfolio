import ProjectCard from "@/components/ProjectCard";

async function getProjects() {
    const res = await fetch("http://localhost:3000/api/projects", {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch projects");
    return res.json();
}

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <div>
            <h1 className="text-3xl font-bold text-[#3d2c2e] mb-6">Projects Overview</h1>
            <p className="text-[#6b4f52] mb-8">
                All projects (open source + school).
            </p>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project: any) => (
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