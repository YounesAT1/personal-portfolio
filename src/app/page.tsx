import BlurFade from "@/components/magicui/blur-fade";
import AboutSection from "@/components/section/about-section";
import CertificationsSection from "@/components/section/certifications-section";
import ContactSection from "@/components/section/contact-section";
import EducationSection from "@/components/section/education-section";
import HeroSection from "@/components/section/hero-section";
import LanguagesSection from "@/components/section/languages-section";
import ProjectsSection from "@/components/section/projects-section";
import SkillsSection from "@/components/section/skills-section";
import WorkSection from "@/components/section/work-section";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <CertificationsSection />
      <EducationSection />
      <SkillsSection />
      <LanguagesSection />
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <ProjectsSection />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <ContactSection />
      </BlurFade>
    </main>
  );
}
