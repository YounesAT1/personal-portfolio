"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { useLanguage } from "@/context/language-context";
import {
  getActivePost,
  sortLocalizedPostGroups,
  type LocalizedPostGroup,
} from "@/lib/blog";
import { normalizePage, paginate } from "@/lib/pagination";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const PAGE_SIZE = 10;
const BLUR_FADE_DELAY = 0.04;

const BLOG_TEXT = {
  en: {
    title: "Blog",
    postCount: (count: number) => `${count} ${count === 1 ? "post" : "posts"}`,
    description: "My thoughts on software development, life, and more.",
    empty: "No blog posts yet. Check back soon!",
    page: (current: number, total: number) => `Page ${current} of ${total}`,
    previous: "Previous",
    next: "Next",
  },
  fr: {
    title: "Blog",
    postCount: (count: number) =>
      `${count} ${count === 1 ? "article" : "articles"}`,
    description:
      "Mes réflexions sur le développement logiciel, la vie, et plus encore.",
    empty: "Aucun article pour le moment. Revenez bientôt !",
    page: (current: number, total: number) => `Page ${current} sur ${total}`,
    previous: "Précédent",
    next: "Suivant",
  },
} as const;

type BlogPageClientProps = {
  groups: LocalizedPostGroup[];
  pageParam?: string;
};

export function BlogPageClient({ groups, pageParam }: BlogPageClientProps) {
  const { language } = useLanguage();
  const text = BLOG_TEXT[language];
  const sortedGroups = sortLocalizedPostGroups(groups, language);
  const totalPages = Math.max(Math.ceil(sortedGroups.length / PAGE_SIZE), 1);
  const currentPage = normalizePage(pageParam, totalPages);
  const { items: paginatedGroups, pagination } = paginate(sortedGroups, {
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  return (
    <section id="blog" className="max-w-2xl mx-auto">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          {text.title}{" "}
          <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
            {text.postCount(sortedGroups.length)}
          </span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">{text.description}</p>
      </BlurFade>

      {paginatedGroups.length > 0 ? (
        <>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex flex-col gap-5">
              {paginatedGroups.map((group, id) => {
                const post = getActivePost(group, language);
                const indexNumber = (pagination.page - 1) * PAGE_SIZE + id + 1;

                return (
                  <BlurFade
                    delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                    key={group.slug}
                  >
                    <Link
                      className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      href={`/blog/${group.slug}`}
                    >
                      <span className="text-xs font-mono tabular-nums font-medium mt-1.2">
                        {String(indexNumber).padStart(2, "0")}.
                      </span>
                      <div className="flex flex-col gap-y-2 flex-1">
                        <p className="tracking-tight text-lg font-medium">
                          <span className="group-hover:text-foreground transition-colors">
                            {post.title}
                            <ChevronRight
                              className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                              aria-hidden
                            />
                          </span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {post.publishedAt}
                        </p>
                      </div>
                    </Link>
                  </BlurFade>
                );
              })}
            </div>
          </BlurFade>

          {pagination.totalPages > 1 && (
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="flex gap-3 flex-row items-center justify-between mt-8">
                <div className="text-sm text-muted-foreground">
                  {text.page(pagination.page, pagination.totalPages)}
                </div>
                <div className="flex gap-2 sm:justify-end">
                  {pagination.hasPreviousPage ? (
                    <Link
                      href={`/blog?page=${pagination.page - 1}`}
                      className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {text.previous}
                    </Link>
                  ) : (
                    <span className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                      {text.previous}
                    </span>
                  )}
                  {pagination.hasNextPage ? (
                    <Link
                      href={`/blog?page=${pagination.page + 1}`}
                      className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {text.next}
                    </Link>
                  ) : (
                    <span className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                      {text.next}
                    </span>
                  )}
                </div>
              </div>
            </BlurFade>
          )}
        </>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
            <p className="text-muted-foreground text-center">{text.empty}</p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
