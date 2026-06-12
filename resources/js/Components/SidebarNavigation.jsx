import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SidebarNavigation() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const routeTitles = {
        "/": "Home",
        "/about": "About Me",
        "/contact": "Contact",
    };

    const title = routeTitles[location.pathname] ?? location.pathname;

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/services", label: "Services" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <>
            {/* ── MOBILE: top navbar ── */}
            <div className="md:hidden flex items-center justify-between bg-[#141416] text-[#EEEEF2] px-4 py-3 w-full">
                <h2 className="text-lg font-bold">{title}</h2>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded hover:bg-[#1E1F24] focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {/* Hamburger / X icon */}
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* ── MOBILE: dropdown menu ── */}
            {isOpen && (
                <div className="md:hidden bg-[#141416] text-[#EEEEF2] w-full px-4 pb-4 flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsOpen(false)} // close on navigate
                            className={`px-3 py-2 rounded hover:bg-[#1E1F24] ${
                                location.pathname === link.to ? "bg-[#1E1F24] font-semibold" : ""
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}

            {/* ── DESKTOP: sidebar ── */}
            <div className="hidden md:flex flex-col w-64 h-screen bg-[#141416] text-[#EEEEF2] p-4 shrink-0">
                <h2 className="text-2xl font-bold mb-6">{title}</h2>
                <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`px-3 py-2 rounded hover:bg-[#1E1F24] ${
                                location.pathname === link.to ? "bg-[#1E1F24] font-semibold" : ""
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}