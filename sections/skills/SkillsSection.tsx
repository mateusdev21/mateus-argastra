import Section from "../../components/common/section";
import SectionBadge from "../../components/common/section-badge";
import SectionDescription from "../..//components/common/section-description";
import SectionHeading from "../..//components/common/section-heading";

import SkillCard from "./SkillCard";
import { SKILL_CATEGORIES } from "./skills-data";

export default function SkillsSection() {
    return (
        <Section id="skills">
            <SectionBadge>Skills & Technologies</SectionBadge>

            <SectionHeading>
                Technologies and tools I use to build
                modern web applications.
            </SectionHeading>

            <SectionDescription>
                Focused on frontend engineering with experience
                building scalable interfaces, reusable component
                systems, and modern web applications.
            </SectionDescription>

            <div className="mt-16 space-y-14">
                {SKILL_CATEGORIES.map((category) => (
                    <div key={category.title}>
                        <h3 className="mb-6 text-xl font-semibold tracking-tight">
                            {category.title}
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-4 lg:grid-cols-8">
                            {category.skills.map((skill) => (
                                <SkillCard
                                    key={skill.name}
                                    name={skill.name}
                                    icon={skill.icon}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}