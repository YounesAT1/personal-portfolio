import BlurFade from "@/components/magicui/blur-fade";
import { SectionTitle } from "@/components/ui/section-title";
import { DATA } from "@/data/resume";
import ReactCountryFlag from "react-country-flag";

const BLUR_FADE_DELAY = 0.04;

const LANG_CODES: Record<string, string> = {
  Arabic: "MA",
  French: "FR",
  English: "GB",
};

export default function LanguagesSection() {
  return (
    <section id="languages">
      <div className="flex min-h-0 flex-col gap-y-4 max-w-2xl mx-auto">
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
                    countryCode={LANG_CODES[lang.name] ?? "UN"}
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
