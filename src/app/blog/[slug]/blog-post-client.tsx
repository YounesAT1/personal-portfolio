"use client";

import { ImageGallery } from "@/components/ui/image-gallery";
import { useLanguage } from "@/context/language-context";
import { mdxComponents } from "@/mdx-components";
import { MDXContent } from "@content-collections/mdx/react";
import {
  getActivePost,
  sortLocalizedPostGroups,
  type BlogLanguage,
  type LocalizedPostGroup,
} from "@/lib/blog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const BLOG_POST_TEXT = {
  en: {
    backToBlog: "Back to Blog",
    previous: "Previous",
    next: "Next",
  },
  fr: {
    backToBlog: "Retour au blog",
    previous: "Précédent",
    next: "Suivant",
  },
} as const;

type BlogPostClientProps = {
  currentGroup: LocalizedPostGroup;
  groups: LocalizedPostGroup[];
};

function formatLocalizedDate(date: string | Date, language: BlogLanguage) {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  return dateObj.toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function BlogPostClient({ currentGroup, groups }: BlogPostClientProps) {
  const { language } = useLanguage();
  const text = BLOG_POST_TEXT[language];
  const post = getActivePost(currentGroup, language);
  const sortedGroups = sortLocalizedPostGroups(groups, language);
  const currentIndex = sortedGroups.findIndex(
    (group) => group.slug === currentGroup.slug,
  );
  const previousGroup =
    currentIndex > 0 ? sortedGroups[currentIndex - 1] : null;
  const nextGroup =
    currentIndex >= 0 && currentIndex < sortedGroups.length - 1
      ? sortedGroups[currentIndex + 1]
      : null;

  return (
    <section id="blog" className="max-w-2xl mx-auto">
      <div className="flex justify-start gap-4 items-center">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group"
          aria-label={text.backToBlog}
        >
          <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
          {text.backToBlog}
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight">
          {post.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {formatLocalizedDate(post.publishedAt, language)}
        </p>
      </div>
      <div className="my-6 flex w-full items-center">
        <div
          className="flex-1 h-px bg-border"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>

      {post.gallery && post.gallery.length > 0 && (
        <div className="mb-8">
          <ImageGallery images={post.gallery} />
        </div>
      )}

      <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        <MDXContent code={post.mdx} components={mdxComponents} />
      </article>

      <nav className="mt-12 pt-8 max-w-2xl">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {previousGroup ? (
            <Link
              href={`/blog/${previousGroup.slug}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ChevronLeft className="size-3" />
                {text.previous}
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {getActivePost(previousGroup, language).title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}

          {nextGroup ? (
            <Link
              href={`/blog/${nextGroup.slug}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-right"
            >
              <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                {text.next}
                <ChevronRight className="size-3" />
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {getActivePost(nextGroup, language).title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}
        </div>
      </nav>
    </section>
  );
}
