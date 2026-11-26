import Link from "next/link";
import { deleteProject } from "@/app/lib/actions";

export function EditButton({ id, title }: { id: number; title: string }) {
    return (
        <Link
            href={`/dashboard/projects/${id}/edit`}
            aria-label={`Edit ${title}`}
            className="px-4 py-2 rounded-full text-sm font-medium border border-[#f0d5d9] text-[#3d2c2e] hover:bg-[#f5e6e8] transition-colors"
        >
            Edit
        </Link>
    );
}

export function DeleteButton({ id, title }: { id: number; title: string }) {
    return (
        <form action={deleteProject.bind(null, id)}>
            <button
                type="submit"
                aria-label={`Delete ${title}`}
                className="px-4 py-2 rounded-full text-sm font-medium border border-red-200 text-red-700 hover:bg-red-50 transition-colors"
            >
                Delete
            </button>
        </form>
    );
}