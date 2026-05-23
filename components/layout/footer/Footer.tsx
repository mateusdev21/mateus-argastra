import Link from "next/link";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";

const navigation = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Skills",
        href: "#skills",
    },
    {
        label: "Experience",
        href: "#experience",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/yourusername",
        icon: FaGithub,
    },

    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/yourusername",
        icon: FaLinkedin,
    },

    {
        label: "Instagram",
        href: "https://instagram.com/yourusername",
        icon: FaInstagram,
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-black/10 py-16 dark:border-white/10 dark:bg-black">
            <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
                {/* TOP */}
                <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
                    {/* BRAND */}
                    <div className="max-w-md">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Mateus Argastra
                        </h2>

                        <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                            Frontend developer focused on building
                            scalable, modern, and user-centered
                            web applications.
                        </p>
                    </div>

                    {/* NAVIGATION */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                            Navigation
                        </h3>

                        <div className="flex flex-wrap gap-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* SOCIALS */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                            Socials
                        </h3>

                        <div className="flex items-center gap-4">
                            {socials.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-black/2 transition hover:-translate-y-1 hover:border-black/20 hover:bg-black/4 dark:border-white/10 dark:bg-white/3 dark:hover:border-white/20 dark:hover:bg-white/5"
                                        aria-label={social.label}
                                    >
                                        <Icon className="text-lg" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col gap-4 border-t border-black/10 pt-8 text-sm text-zinc-500 dark:border-white/10 md:flex-row md:items-center md:justify-between">
                    <p>
                        © {new Date().getFullYear()} Mateus.
                        All rights reserved.
                    </p>

                    <p>
                        Designed & built with Next.js and Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
}