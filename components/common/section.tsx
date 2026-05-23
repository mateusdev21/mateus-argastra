import { cn } from "../../lib/cn";
import Container from "./container";

type SectionProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

export default function Section({
    children,
    className,
    id,
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-24 md:py-32",
                className
            )}
        >
            <Container>{children}</Container>
        </section>
    );
}