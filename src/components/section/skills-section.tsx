"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { SectionTitle } from "@/components/ui/section-title";
import { useLanguage } from "@/context/language-context";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function SkillsSection() {
  const { data: DATA, language } = useLanguage();
  const sectionTitle =
    language === "en" ? "Skills & Tools" : "Compétences & Outils";
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-4 max-w-3xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <SectionTitle>{sectionTitle}</SectionTitle>
        </BlurFade>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <div className="border bg-background border-border ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                {skill.icon && (
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    className="size-4 rounded overflow-hidden object-contain"
                    width={16}
                    height={16}
                    unoptimized
                  />
                )}
                <span className="text-foreground text-sm font-medium">
                  {skill.name}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
