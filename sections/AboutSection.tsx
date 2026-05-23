import Section from "../components/common/section";
import SectionBadge from "../components/common/section-badge";
import SectionHeading from "../components/common/section-heading";
import SectionDescription from "../components/common/section-description";

const stats = [
    {
        label: "Years Experience",
        value: "3+",
    },
    {
        label: "Projects Built",
        value: "20+",
    },
    {
        label: "Main Stack",
        value: "React & Vue",
    },
    {
        label: "Focus",
        value: "Frontend Engineering",
    },
];

export default function AboutSection() {
    return (
        <Section id="about">
            <div className="grid gap-16 lg:grid-cols-2">
                {/* LEFT CONTENT */}
                <div>
                    <SectionBadge>About Me</SectionBadge>

                    <SectionHeading>
                        Building modern interfaces with a strong focus on
                        scalability, usability, and clean architecture.
                    </SectionHeading>

                    <SectionDescription>
                        I’m a frontend developer with experience building
                        enterprise dashboards, internal systems, and modern
                        web applications using React, Next.js, Vue, and
                        TypeScript.
                    </SectionDescription>

                    <SectionDescription>
                        I enjoy turning complex workflows into clean and
                        intuitive user experiences while maintaining
                        scalable frontend architecture and reusable
                        component systems.
                    </SectionDescription>
                </div>

                {/* RIGHT CONTENT */}
                <div className="grid grid-cols-2 gap-4">
                    {stats.map((item) => (
                        <div
                            key={item.label}
                            className="rounded-3xl border border-black/10 bg-black/2 p-8 transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/3 dark:hover:border-white/20"
                        >
                            <div className="text-3xl font-bold tracking-tight">
                                {item.value}
                            </div>

                            <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* BOTTOM PHILOSOPHY */}
            <div className="mt-20 rounded-3xl border border-black/10 bg-black/2 p-8 md:p-10 dark:border-white/10 dark:bg-white/3">
                <p className="max-w-4xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-xl">
                    I believe great frontend development is not only about
                    creating beautiful interfaces, but also about building
                    systems that are maintainable, performant, and aligned
                    with real business needs.
                </p>
            </div>
        </Section>
    );
}