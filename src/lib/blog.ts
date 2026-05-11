import type { Post } from "content-collections";

export type BlogLanguage = "en" | "fr";

export type LocalizedPostGroup = {
  slug: string;
  en: Post;
  fr?: Post;
};

const FRENCH_CONTENT_PREFIX = "fr/";

function normalizeContentPath(path: string) {
  return path.replace(/\\/g, "/");
}

export function getPostSlug(post: Post) {
  return normalizeContentPath(post._meta.path)
    .replace(/^fr\//, "")
    .replace(/\.mdx$/, "");
}

export function getPostLanguage(post: Post): BlogLanguage {
  return normalizeContentPath(post._meta.path).startsWith(
    FRENCH_CONTENT_PREFIX,
  )
    ? "fr"
    : "en";
}

export function getActivePost(
  group: LocalizedPostGroup,
  language: BlogLanguage,
) {
  return language === "fr" ? group.fr ?? group.en : group.en;
}

export function getLocalizedPostGroups(posts: Post[]) {
  const groups = new Map<string, Partial<LocalizedPostGroup> & { slug: string }>();

  for (const post of posts) {
    const slug = getPostSlug(post);
    const language = getPostLanguage(post);
    const group = groups.get(slug) ?? { slug };

    group[language] = post;
    groups.set(slug, group);
  }

  return Array.from(groups.values()).filter(
    (group): group is LocalizedPostGroup => Boolean(group.en),
  );
}

export function sortLocalizedPostGroups(
  groups: LocalizedPostGroup[],
  language: BlogLanguage,
) {
  return [...groups].sort((a, b) => {
    const aPost = getActivePost(a, language);
    const bPost = getActivePost(b, language);

    if (new Date(aPost.publishedAt) > new Date(bPost.publishedAt)) {
      return -1;
    }

    return 1;
  });
}

export function getLocalizedPostGroup(slug: string, posts: Post[]) {
  return getLocalizedPostGroups(posts).find((group) => group.slug === slug);
}
