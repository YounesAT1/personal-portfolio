"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { SectionTitle } from "@/components/ui/section-title";
import { useLanguage } from "@/context/language-context";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function AboutSection() {
  const { data: DATA, language } = useLanguage();

  const sectionName = language === "en" ? "About" : "À propos";

  return (
    <section id="about">
      <div className="flex min-h-0 flex-col gap-y-4 max-w-3xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <SectionTitle>{sectionName}</SectionTitle>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
