"use client";

import Image from "next/image";
import BlurFade from "../magicui/blur-fade";
import { SectionTitle } from "../ui/section-title";
import { useLanguage } from "@/context/language-context";

export default function PerformanceSection() {
  const { language } = useLanguage();

  const BLUR_FADE_DELAY = 0.04;

  const sectionTitle =
    language === "en" ? "Performance Benchmarks" : "Benchmarks de performance";

  const description =
    language === "en"
      ? "Applications optimized for performance, accessibility, and SEO based on Lighthouse analysis."
      : "Applications optimisées pour la performance, l’accessibilité et le SEO selon l’analyse Lighthouse.";

  return (
    <section className="w-full max-w-3xl mx-auto py-16 flex flex-col items-center gap-10">
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <SectionTitle>{sectionTitle}</SectionTitle>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <p className="text-muted-foreground text-center max-w-2xl">
          {description}
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 8}>
        <div className="w-full max-w-5xl space-y-6">
          {/* Main Image */}
          <div className="rounded-xl border bg-muted/20 p-4">
            <Image
              src="/lighthouse-performanc.png"
              alt="Main Lighthouse performance"
              width={1200}
              height={600}
              className="rounded-lg w-full h-auto"
              priority
            />
          </div>

          {/* Two side-by-side images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-muted/20 p-4">
              <Image
                src="/lighthouse-project-1.png"
                alt="Project performance result 1"
                width={800}
                height={500}
                className="rounded-lg w-full h-auto"
              />
            </div>

            <div className="rounded-xl border bg-muted/20 p-4">
              <Image
                src="/lighthouse-project-2.png"
                alt="Project performance result 2"
                width={800}
                height={500}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
