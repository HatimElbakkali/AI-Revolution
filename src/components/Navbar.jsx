import { useState } from "react";

export default function Navbar() {
    const links = [
        { name: "Home", href: "#home" },
        { name: "AI Types", href: "#types" },
        { name: "Benefits", href: "#benefits" },
        { name: "Contact", href: "#contact" },
    ];

    const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
    return (
        <>
            <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
                <div className="app-container flex justify-between items-center h-16">
                    {/* Logo */}
                    <span className="gradient-text text-2xl font-bold">
                        AI Revolution
                    </span>
                    {/* desktop links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <a key={link.name} className="nav-item" href={link.href}>
                                {link.name}
                            </a>
                        ))}
                        <a href="#" className="nav-btn">
                            Get Started
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button onClick={() => setmobileMenuOpen((prev) => !prev)} className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg rounded-b-lg px-2 pt-2 pb-3 space-y-1">
                        {links.map((link) => (
                            <a key={link.name} className="mobile-nav-item" href={link.href}>
                                {link.name}
                            </a>
                        ))}
                        <a href="#" className="nav-btn">
                            Get Started
                        </a>
                    </div>
                )}
            </nav>
        </>
    );
}
