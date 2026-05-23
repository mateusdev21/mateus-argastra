import { cn } from "../../lib/cn";

type SectionDescriptionProps = {
    children: React.ReactNode;
    className?: string;
};

export default function SectionDescription({
    children,
    className,
}: SectionDescriptionProps) {
    return (
        <p
            className={cn(
                "mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg",
                className
            )}
        >
            {children}
        </p>
    );
}