'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';

const inputClass =
    "block w-full rounded-md border border-[#f0d5d9] bg-white px-3 py-2 text-sm text-[#3d2c2e] outline-none focus:ring-2 focus:ring-[#e8a0a8]";

export function LoginForm() {
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

    return (
        <form action={formAction} className="space-y-4">
            <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#3d2c2e]">
                    Email
                </label>
                <input id="email" type="email" name="email" required className={inputClass} />
            </div>
            <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#3d2c2e]">
                    Password
                </label>
                <input
                    id="password" type="password" name="password"
                    minLength={6} required className={inputClass}
                />
            </div>
            <button
                type="submit"
                aria-disabled={isPending}
                disabled={isPending}
                className="w-full rounded-full bg-[#e8a0a8] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#d48992] disabled:opacity-60"
            >
                {isPending ? 'Signing in...' : 'Sign In'}
            </button>
            <div aria-live="polite">
                {errorMessage && (
                    <p role="alert" className="text-sm text-red-600">{errorMessage}</p>
                )}
            </div>
        </form>
    );
}