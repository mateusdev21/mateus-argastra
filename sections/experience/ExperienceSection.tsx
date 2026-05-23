import Section from "../../components/common/section";
import SectionBadge from "../../components/common/section-badge";
import SectionDescription from "../../components/common/section-description";
import SectionHeading from "../../components/common/section-heading";

import ExperienceItem from "./ExperienceItem";
import { EXPERIENCES } from "./experience-data";

export default function ExperienceSection() {
    return (
        <Section id="experience">
            <SectionBadge>Work Experience</SectionBadge>

            <SectionHeading>
                Professional experience building
                modern web applications and systems.
            </SectionHeading>

            <SectionDescription>
                My journey as a frontend developer working on
                enterprise dashboards, internal systems,
                and modern web interfaces across different industries.
            </SectionDescription>

            {/* TIMELINE */}
            <div className="relative mt-20">
                {/* TIMELINE LINE */}
                <div className="absolute left-1.75 top-0 h-full w-px bg-black/10 dark:bg-white/10" />

                <div className="space-y-10">
                    {EXPERIENCES.map((experience) => (
                        <ExperienceItem
                            key={experience.company}
                            company={experience.company}
                            role={experience.role}
                            period={experience.period}
                            description={experience.description}
                            tech={experience.tech}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}