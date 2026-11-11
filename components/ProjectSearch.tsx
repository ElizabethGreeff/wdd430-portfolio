'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function ProjectSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1'); // every new search starts at page 1
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <input
            type="search"
            aria-label="Search projects"
            placeholder="Search projects..."
            defaultValue={searchParams.get('query')?.toString()}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full rounded-full border border-[#f0d5d9] bg-white px-4 py-2 text-[#3d2c2e] placeholder:text-[#6b4f52]/60 focus:outline-none focus:ring-2 focus:ring-[#e8a0a8]"
        />
    );
}