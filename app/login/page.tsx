import type { Metadata } from 'next';
import { LoginForm } from '@/components/LoginForm';

export const metadata: Metadata = { title: 'Sign In' };

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-sm rounded-xl border border-[#f0d5d9] bg-white p-6 shadow-sm">
                <h1 className="mb-6 text-2xl font-bold text-[#3d2c2e]">Sign In</h1>
                <LoginForm />
            </div>
        </main>
    );
}