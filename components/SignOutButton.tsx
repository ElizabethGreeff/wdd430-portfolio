import { signOut } from '@/auth';

export function SignOutButton() {
    return (
        <form
            action={async () => {
                'use server';
                await signOut({ redirectTo: '/' });
            }}
        >
            <button
                type="submit"
                className="rounded-full border border-[#f0d5d9] px-4 py-2 text-sm font-medium text-[#3d2c2e] transition-colors hover:bg-[#f5e6e8]"
            >
                Sign Out
            </button>
        </form>
    );
}