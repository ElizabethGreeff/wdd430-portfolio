'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('An uncaught error occurred:', error);
    }, [error]);

    return (
        <div className="mx-auto mt-16 max-w-xl rounded-xl border border-[#f0d5d9] bg-white p-6 text-center shadow-sm">
            <h1 className="text-2xl font-bold text-[#3d2c2e]">Something went wrong!</h1>
            <p className="mt-3 text-[#6b4f52]">
                An unexpected error occurred. Please try again later.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                    onClick={reset}
                    className="rounded-full bg-[#e8a0a8] px-4 py-2 font-semibold text-white transition hover:bg-[#d48992]"
                >
                    Try Again
                </button>
                <Link
                    href="/projects"
                    className="rounded-full border border-[#f0d5d9] px-4 py-2 font-semibold text-[#3d2c2e] transition hover:bg-[#f5e6e8]"
                >
                    Go Back to Projects
                </Link>
            </div>
        </div>
    );
}