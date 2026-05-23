"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <button
            onClick={() =>
                setTheme(isDark ? "light" : "dark")
            }
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white transition hover:scale-105 dark:border-white/10 dark:bg-white/5 hover:cursor-pointer"
            aria-label="Toggle Theme"
        >
            {isDark ? (
                <Sun size={18} className="text-white" />
            ) : (
                <Moon size={18} className="text-black" />
            )}
        </button>
    );
}