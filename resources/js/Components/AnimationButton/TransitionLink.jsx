import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TransitionLink({ to, children, className }) {
    const navigate = useNavigate();
    const [phase, setPhase] = useState(null); // null | "fadeout" | "done"

    const handleClick = (e) => {
        e.preventDefault();
        setPhase("fadeout");

        setTimeout(() => {
            navigate(to);
            setPhase(null);
        }, 800); // match the CSS transition duration
    };

    return (
        <>
            {/* Full-screen overlay that fades IN to white/black, wiping out the page */}
            <div className={`fixed inset-0 z-50 bg-[#060010] pointer-events-none transition-opacity duration-700 ${
                phase === "fadeout" ? "opacity-100" : "opacity-0"
            }`} />

            <a href={to} onClick={handleClick} className={className}>
                {children}
            </a>
        </>
    );
}