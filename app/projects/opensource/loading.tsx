export default function Loading() {
    return (
        <div className="animate-pulse">
            {/* Heading + intro text */}
            <div className="h-9 w-72 rounded bg-[#f0d5d9] mb-6" />
            <div className="h-4 w-full max-w-xl rounded bg-[#f5e6e8] mb-8" />

            {/* Project cards */}
            <div className="grid gap-6 md:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className="h-48 rounded-xl border border-[#f0d5d9] bg-[#f5e6e8]"
                    />
                ))}
            </div>
        </div>
    );
}