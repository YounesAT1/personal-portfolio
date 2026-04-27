import Link from "next/link";
import { DATA } from "@/data/resume";
import { FlickeringGrid } from "../magicui/flickering-grid";

export default function ContactSection() {
  return (
    <>
      <style>{`
        @keyframes cs-breathe {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }
        .cs-dot { animation: cs-breathe 2.4s ease-in-out infinite; }

        .cs-email-link {
          position: relative;
          display: inline-flex;
          align-items: center;
        }
        .cs-email-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: right center;
          transition: transform 0.45s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .cs-email-link:hover::after {
          transform: scaleX(1);
          transform-origin: left center;
        }

        .cs-social-link {
          position: relative;
          padding-bottom: 2px;
        }
        .cs-social-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: right center;
          transition: transform 0.3s ease;
          opacity: 0.5;
        }
        .cs-social-link:hover::after {
          transform: scaleX(1);
          transform-origin: left center;
        }

        .cs-arrow {
          display: inline-block;
          transition: transform 0.25s ease;
        }
        .cs-email-link:hover .cs-arrow,
        .cs-cta:hover .cs-arrow {
          transform: translate(3px, -3px);
        }

        .cs-cta {
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .cs-cta:hover {
          background: hsl(var(--muted) / 0.6);
          border-color: hsl(var(--foreground) / 0.25);
        }
      `}</style>

      {/* Outer wrapper — gives the absolute grid something to fill */}
      <div className="relative max-w-7xl mx-auto mt-3">
        {/* FlickeringGrid sits behind the card, fades downward */}
        <div className="absolute inset-x-0 top-0 h-1/2 rounded-2xl overflow-hidden pointer-events-none">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>

        {/* Card sits on top */}
        <div className="relative z-10 border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.25fr]">
            {/* ── Left panel ─────────────────────────────── */}
            <div className="p-10 md:p-14 flex flex-col justify-between border-b md:border-b-0 md:border-r bg-muted/25">
              <div className="space-y-8">
                {/* Availability badge */}
                <div className="flex items-center gap-2.5">
                  <span className="cs-dot inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
                    Available for work
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-5xl md:text-[3.5rem] lg:text-6xl font-normal leading-[1.05] tracking-tight">
                  Let&apos;s build
                  <br />
                  <em>something</em>
                  <br />
                  remarkable.
                </h2>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mt-10 max-w-[24ch]">
                Open to new projects, full-time roles, and interesting
                conversations — big or small.
              </p>
            </div>

            {/* ── Right panel ────────────────────────────── */}
            <div className="p-10 md:p-14 flex flex-col justify-center gap-9">
              {/* Email */}
              <div className="space-y-2.5">
                <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                  Email
                </p>
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-email-link text-xl md:text-2xl font-medium tracking-tight text-foreground gap-2"
                >
                  {DATA.contact.email}
                  <span className="cs-arrow text-muted-foreground text-lg ml-2">
                    ↗
                  </span>
                </Link>
              </div>

              <div className="h-px bg-border" />

              {/* Social profiles */}
              <div className="space-y-4">
                <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                  Profiles
                </p>
                <div className="flex flex-wrap gap-x-7 gap-y-3">
                  {Object.entries(DATA.contact.social).map(([name, social]) => (
                    <Link
                      key={name}
                      href={(social as { url: string }).url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs-social-link text-sm text-foreground/60 hover:text-foreground transition-colors duration-200"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* CTA row */}
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="cs-cta group flex items-center justify-between w-full rounded-xl border border-border px-6 py-4"
              >
                <span className="text-sm font-medium">Send me a message</span>
                <span className="cs-arrow text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
