import BlurFade from "@/components/magicui/blur-fade";
import { SectionTitle } from "@/components/ui/section-title";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function CertificationsSection() {
  return (
    <section id="certifications">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 6.5}>
          <SectionTitle>Certifications</SectionTitle>
        </BlurFade>
        <div className="flex flex-col gap-6">
          {DATA.certifications.map((cert, index) => (
            <BlurFade
              key={cert.title}
              delay={BLUR_FADE_DELAY * 6.8 + index * 0.05}
            >
              <Link
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-3 justify-between group"
              >
                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                  {cert.logoUrl ? (
                    <div className="size-8 md:size-10 flex-none bg-background rounded-full border shadow ring-2 ring-border overflow-hidden flex items-center justify-center p-1">
                      <Image
                        src={cert.logoUrl}
                        alt={cert.issuer}
                        width={500}
                        height={500}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="size-8 md:size-10 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                  )}
                  <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                    <div className="font-semibold leading-none flex items-center gap-2">
                      {cert.title}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                        aria-hidden
                      />
                    </div>
                    <div className="font-sans text-sm text-muted-foreground">
                      {cert.issuer}
                    </div>
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
