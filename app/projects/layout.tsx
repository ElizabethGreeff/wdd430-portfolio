import Link from "next/link";

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="max-w-4xl mx-auto p-6">
            <nav className="mb-8 flex gap-4 text-sm font-medium">
                <Link href="/projects" className="text-[#3d2c2e] hover:underline">
                    Overview
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/projects/opensource" className="text-[#3d2c2e] hover:underline">
                    Open Source
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/projects/school" className="text-[#3d2c2e] hover:underline">
                    School
                </Link>
            </nav>

            {children}
        </section>
    );
}