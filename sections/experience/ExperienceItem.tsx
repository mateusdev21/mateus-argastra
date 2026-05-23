type ExperienceItemProps = {
    company: string;
    role: string;
    period: string;
    description: string;
    tech: string[];
};

export default function ExperienceItem({
    company,
    role,
    period,
    description,
    tech,
}: ExperienceItemProps) {
    return (
        <div className="relative pl-10">
            {/* TIMELINE DOT */}
            <div className="absolute left-0 top-2 z-10 h-4 w-4 rounded-full border-4 border-white bg-black dark:border-black dark:bg-white" />

            {/* CONTENT */}
            <div className="rounded-3xl border border-black/10 bg-black/2 p-8 transition hover:border-black/20 hover:bg-black/4 dark:border-white/10 dark:bg-white/3 dark:hover:border-white/20 dark:hover:bg-white/5">
                {/* PERIOD */}
                <span className="text-sm text-zinc-500">
                    {period}
                </span>

                {/* ROLE */}
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {role}
                </h3>

                {/* COMPANY */}
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    {company}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-6 leading-relaxed text-zinc-700 dark:text-zinc-300">
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
            </div>
        </div>
    );
}