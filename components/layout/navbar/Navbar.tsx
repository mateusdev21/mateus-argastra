"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import ThemeToggle from "../../common/theme-toggle";

import { NAV_LINKS } from "./nav-links";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "border-b border-black/10 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-black/70"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                {/* LOGO */}
                <Link
                    href="/"
                    className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                    Mateus Argastra
                </Link>

                {/* DESKTOP MENU */}
                <nav className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-emerald-600"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* RIGHT SECTION */}
                <div className="hidden items-center gap-3 md:flex">
                    {/* THEME TOGGLE */}
                    <ThemeToggle />

                    {/* CTA */}
                    <Link
                        href="#contact"
                        className="rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-emerald-600 dark:text-black"
                    >
                        Let&apos;s Talk
                    </Link>
                </div>

                {/* MOBILE BUTTON */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center md:hidden"
                >
                    {isOpen ? (
                        <X className="text-black dark:text-white" />
                    ) : (
                        <Menu className="text-black dark:text-white" />
                    )}
                </button>
            </div>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="border-t border-black/10 bg-white dark:border-white/10 dark:bg-black md:hidden">
                    <div className="flex flex-col px-6 py-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="border-b border-black/5 py-4 text-zinc-700 dark:border-white/5 dark:text-zinc-300"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* MOBILE ACTIONS */}
                        <div className="mt-6 flex items-center gap-3">
                            <button
                                onClick={() =>
                                    setTheme(theme === "dark" ? "light" : "dark")
                                }
                                className="rounded-xl border border-black/10 bg-white p-3 dark:border-white/10 dark:bg-white/5"
                            >
                                {theme === "dark" ? (
                                    <Sun size={18} className="text-white" />
                                ) : (
                                    <Moon size={18} className="text-black" />
                                )}
                            </button>

                            <Link
                                href="#contact"
                                className="flex-1 rounded-xl bg-black px-5 py-3 text-center text-sm font-medium text-white dark:bg-white dark:text-black"
                            >
                                Let&apos;s Talk
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}