import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    demo: string;
};

export default function ProjectCard({
    title,
    description,
    image,
    tech,
    github,
    demo,
}: ProjectCardProps) {
    return (
        <div className="group overflow-hidden rounded-4xl border border-black/10 bg-black/2 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-black/4 dark:border-white/10 dark:bg-white/3 dark:hover:border-white/20 dark:hover:bg-white/5">
            {/* IMAGE */}
            <div className="relative aspect-16/10 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            {/* CONTENT */}
            <div className="p-8">
                {/* TITLE */}
                <h3 className="text-2xl font-semibold tracking-tight">
                    {title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {description}
                </p>

                {/* TECH STACK */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {tech.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-zinc-700 dark:border-white/10 dark:bg-black dark:text-zinc-300"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* ACTIONS */}
                <div className="mt-8 flex items-center gap-4">
                    <Link
                        href={github}
                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
                    >
                        <FaGithub size={18} />
                        Github
                    </Link>

                    <Link
                        href={demo}
                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white"
                    >
                        <ArrowUpRight size={18} />
                        Live Demo
                    </Link>
                </div>
            </div>
        </div>
    );
}