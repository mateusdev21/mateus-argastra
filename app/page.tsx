import Navbar from "@/components/layout/navbar/Navbar";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/skills/SkillsSection";
import ExperienceSection from "../sections/experience/ExperienceSection";
import ProjectsSection from "../sections/projects/ProjectsSection";
import ContactSection from "../sections/contact/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-bg-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}