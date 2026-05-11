import { allPosts } from "content-collections";
import { resolveImageUrl } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DATA } from "@/data/me";
import {
  getLocalizedPostGroup,
  getLocalizedPostGroups,
  getPostLanguage,
  getPostSlug,
} from "@/lib/blog";
import { BlogPostClient } from "./blog-post-client";

export async function generateStaticParams() {
  return allPosts
    .filter((post) => getPostLanguage(post) === "en")
    .map((post) => ({
      slug: getPostSlug(post),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = allPosts.find(
    (p) => p._meta.path.replace(/\.mdx$/, "") === slug,
  );

  if (!post) {
    return undefined;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post;
  const resolvedImage = resolveImageUrl(DATA.url, image);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${slug}`,
      ...(resolvedImage && {
        images: [{ url: resolvedImage }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(resolvedImage && {
        images: [resolvedImage],
      }),
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const groups = getLocalizedPostGroups(allPosts);
  const currentGroup = getLocalizedPostGroup(slug, allPosts);

  if (!currentGroup) {
    notFound();
  }

  const post = currentGroup.en;
  const resolvedImage = resolveImageUrl(DATA.url, post.image);

  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    description: post.summary,
    image: resolvedImage ?? `${DATA.url}/blog/${slug}/opengraph-image`,
    url: `${DATA.url}/blog/${slug}`,
    author: {
      "@type": "Person",
      name: DATA.name,
    },
  }).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: jsonLdContent,
        }}
      />
      <BlogPostClient currentGroup={currentGroup} groups={groups} />
    </>
  );
}
