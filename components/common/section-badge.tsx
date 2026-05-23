type SectionBadgeProps = {
    children: React.ReactNode;
};

export default function SectionBadge({
    children,
}: SectionBadgeProps) {
    return (
        <div className="mb-4 inline-flex rounded-full border border-black/10 bg-black/3 px-4 py-1.5 text-sm font-medium text-zinc-600 dark:border-white/10 dark:bg-white/3 dark:text-zinc-300">
            {children}
        </div>
    );
}