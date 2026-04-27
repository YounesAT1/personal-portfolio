import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Highlighter } from "@/components/ui/highlighter";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
          <div className="gap-2 flex flex-col order-2 md:order-1">
            <div className="flex items-center gap-4">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-3xl lg:text-3xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[1]}`}
              />
              <Highlighter action="underline" color="#87CEFA">
                <p className="text-sm font-semibold text-blue-950 dark:text-blue-100">
                  R&D Full Stack Developer (Next.js - Java)
                </p>
              </Highlighter>
            </div>
            <BlurFadeText
              className="text-muted-foreground max-w-150 md:text-lg lg:text-xl"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
            <Avatar className="size-24 md:size-32 border rounded-full sh">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
