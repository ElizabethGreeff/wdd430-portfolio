'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Math.min(Number(searchParams.get('page')) || 1, totalPages);

    const createPageURL = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    if (totalPages <= 1) return null;

    const linkClass =
        "px-4 py-2 rounded-full text-sm font-medium bg-[#e8a0a8] text-white hover:bg-[#d48992] transition-colors";
    const disabledClass =
        "px-4 py-2 rounded-full text-sm font-medium bg-[#f5e6e8] text-[#6b4f52]/50";

    return (
        <nav aria-label="Pagination" className="mt-8 flex items-center justify-center gap-4">
            {currentPage > 1 ? (
                <Link href={createPageURL(currentPage - 1)} className={linkClass}>
                    Previous
                </Link>
            ) : (
                <span aria-disabled="true" className={disabledClass}>Previous</span>
            )}

            <span className="text-sm text-[#6b4f52]">
                Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages ? (
                <Link href={createPageURL(currentPage + 1)} className={linkClass}>
                    Next
                </Link>
            ) : (
                <span aria-disabled="true" className={disabledClass}>Next</span>
            )}
        </nav>
    );
}