interface SkillCardProps {
    title: string;
    skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
    return (
        <article className="bg-white rounded-xl p-5 shadow-sm border border-[#f0d5d9]">
            <h3 className="text-lg font-bold text-[#3d2c2e] mb-3">{title}</h3>
            <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <li
                        key={skill}
                        className="bg-[#f5e6e8] text-[#5c3a3f] text-sm px-3 py-1 rounded-full"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </article>
    );
}