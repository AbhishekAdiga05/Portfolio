import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { FeaturedProjectsSection } from "../components/sections/FeaturedProjectsSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { CertificationsSection } from "../components/sections/CertificationsSection";
import { EducationSection } from "../components/sections/EducationSection";
import { ContactSection } from "../components/sections/ContactSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
