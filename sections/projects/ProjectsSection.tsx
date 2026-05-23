import Section from "../../components/common/section";
import SectionBadge from "../../components/common/section-badge";
import SectionDescription from "../../components/common/section-description";
import SectionHeading from "../../components/common/section-heading";

import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./projects-data";

export default function ProjectsSection() {
    return (
        <Section id="projects">
            <SectionBadge>Projects</SectionBadge>

            <SectionHeading>
                Selected projects showcasing
                frontend engineering and UI craftsmanship.
            </SectionHeading>

            <SectionDescription>
                A collection of projects focused on scalable frontend
                architecture, modern UI development, responsive design,
                and user-centered experiences.
            </SectionDescription>

            {/* PROJECT GRID */}
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
                {PROJECTS.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        tech={project.tech}
                        github={project.github}
                        demo={project.demo}
                    />
                ))}
            </div>
        </Section>
    );
}