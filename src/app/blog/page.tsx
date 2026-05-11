import type { Metadata } from "next";
import { allPosts } from "content-collections";
import { getLocalizedPostGroups } from "@/lib/blog";
import { BlogPageClient } from "./blog-page-client";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const groups = getLocalizedPostGroups(allPosts);

  return <BlogPageClient groups={groups} pageParam={pageParam} />;
}
