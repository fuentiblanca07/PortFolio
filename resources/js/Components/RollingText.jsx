import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import "../../css/style.css";

export function RollingText({ words, className, interval = 2500 }) {
    const [current, setCurrent] = useState(0);
    const [next, setNext] = useState(null);
    const [rolling, setRolling] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (current + 1) % words.length;

            setNext(nextIndex);
            setRolling(true);

            timeoutRef.current = setTimeout(() => {
                setCurrent(nextIndex);
                setNext(null);
                setRolling(false);
            }, 800);
        }, interval);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutRef.current);
        };
    }, [current, words, interval]);

    return (
        <span
            className="relative inline-block"
            style={{ minWidth: `${Math.max(...words.map(w => w.length)) * 0.6}em` }}
        >
            {/* Glow effect behind text */}
            <span
                className="absolute inset-0 blur-xl opacity-30 pointer-events-none"
                style={{ background: "inherit", zIndex: 0 }}
            />

            {/* Current word rolling out */}
       <span
    key={`out-${current}`}
    className={cn(
        "relative inline-block z-10 w-full text-center whitespace-nowrap",
        rolling ? "roll-out" : "",
        className
    )}
>
    {words[current]}
</span>

          {/* Next word rolling in */}
{next !== null && (
    <span
        key={`in-${next}`}
        className={cn(
            "absolute left-1/2 -translate-x-1/2 top-0 z-20 roll-in whitespace-nowrap",
            className
        )}
    >
        {words[next]}
    </span>
)}
        </span>
    );
}