"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav aria-label="Primary">
            <ul className="flex space-x-4">
                {links.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`transition-colors ${isActive
                                        ? "text-[#b76e79] font-semibold" // active style
                                        : "hover:text-[#b76e79]"
                                    }`}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}