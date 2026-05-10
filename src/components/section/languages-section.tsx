"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { SectionTitle } from "@/components/ui/section-title";
import { useLanguage } from "@/context/language-context";
import ReactCountryFlag from "react-country-flag";

const BLUR_FADE_DELAY = 0.04;

function flagToCountryCode(flag: string): string {
  const codePoints = [...flag].map((c) => c.codePointAt(0)! - 0x1f1e6);
  return String.fromCharCode(...codePoints.map((n) => n + 65));
}

export default function LanguagesSection() {
  const { data: DATA } = useLanguage();

  return (
    <section id="languages">
      <div className="flex min-h-0 flex-col gap-y-4 max-w-3xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
          <SectionTitle>Languages</SectionTitle>
        </BlurFade>
        <div className="flex flex-col gap-2">
          {DATA.languages.map((lang, id) => (
            <BlurFade
              key={lang.name}
              delay={BLUR_FADE_DELAY * 10.8 + id * 0.05}
            >
              <div className="border bg-background border-border ring-border/20 rounded-xl h-10 w-full px-4 flex items-center justify-between">
                <span className="text-foreground text-sm font-medium flex items-center gap-2">
                  <ReactCountryFlag
                    countryCode={flagToCountryCode(lang.flag)}
                    svg
                    style={{ width: "1.2em", height: "1.2em" }}
                  />
                  {lang.name}
                </span>
                <span className="text-muted-foreground text-sm">
                  {lang.level}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
