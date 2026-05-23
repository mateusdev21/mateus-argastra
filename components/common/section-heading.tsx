import { cn } from "../../lib/cn";

type SectionHeadingProps = {
    children: React.ReactNode;
    className?: string;
};

export default function SectionHeading({
    children,
    className,
}: SectionHeadingProps) {
    return (
        <h2
            className={cn(
                "text-3xl font-bold tracking-tight md:text-5xl",
                className
            )}
        >
            {children}
        </h2>
    );
}