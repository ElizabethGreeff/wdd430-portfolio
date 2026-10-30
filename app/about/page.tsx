import SkillCard from "@/components/SkillCard";

export default function About() {
    return (
        <main className="container mx-auto px-4 py-10">
            <section className="mb-10 max-w-2xl">
                <h2 className="text-3xl font-bold mb-4 text-[#3d2c2e]">About Me</h2>
                <p className="mb-4 text-[#6b4f52] leading-relaxed">
                    I'm a web developer with a passion for creating engaging and
                    user-friendly web applications. With a background in both design and
                    development, I strive to build experiences that are not only
                    functional but also aesthetically pleasing and fun to engage with.
                </p>
            </section>

            <section className="grid gap-5 sm:grid-cols-2 max-w-3xl">
                <SkillCard
                    title="Languages & tools"
                    skills={["JavaScript", "HTML", "CSS", "JSON", "SQL"]}
                />
                <SkillCard
                    title="Learning now"
                    skills={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
                />
            </section>
        </main>
    );
}