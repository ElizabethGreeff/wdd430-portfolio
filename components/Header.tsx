import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-[#f5e6e8] text-[#5c3a3f] p-4 border-b border-[#e8c4c9]">
            <div
                id="header-content"
                className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3"
            >
                <h1 className="text-xl font-bold">Elizabeth Greeff</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:text-[#b76e79] transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-[#b76e79] transition-colors">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}