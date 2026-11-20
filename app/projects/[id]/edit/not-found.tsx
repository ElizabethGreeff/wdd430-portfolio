import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="mx-auto mt-16 max-w-xl rounded-xl border border-[#f0d5d9] bg-white p-6 text-center shadow-sm">
            <h1 className="text-2xl font-bold text-[#3d2c2e]">Project Not Found</h1>
            <p className="mt-3 text-[#6b4f52]">The project you are looking for does not exist.</p>
            <div className="mt-6">
                <Link
                    href="/projects"
                    className="rounded-full border border-[#f0d5d9] px-4 py-2 font-semibold text-[#3d2c2e] transition hover:bg-[#f5e6e8]"
                >
                    Back to Projects
                </Link>
            </div>
        </div>
    );
}