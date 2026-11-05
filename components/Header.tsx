import NavLinks from "./NavLinks";

export default function Header() {
    return (
        <header className="bg-[#f5e6e8] text-[#5c3a3f] p-4 border-b border-[#e8c4c9]">
            <div
                id="header-content"
                className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3"
            >
                <h1 className="text-xl font-bold">Elizabeth Greeff</h1>
                <NavLinks />
            </div>
        </header>
    );
}