import BlurFade from "@/components/magicui/blur-fade";
import { SectionTitle } from "@/components/ui/section-title";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function AboutSection() {
  return (
    <section id="about">
      <div className="flex min-h-0 flex-col gap-y-4 max-w-2xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <SectionTitle>About</SectionTitle>
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
