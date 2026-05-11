import { ImageResponse } from "next/og";
import { allPosts } from "content-collections";
import { resolveImageUrl } from "@/lib/utils";
import { DATA } from "@/data/me";
import Image from "next/image";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function ImageComponent({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find(
    (p) => p._meta.path.replace(/\.mdx$/, "") === params.slug,
  );

  const avatarUrl = resolveImageUrl(DATA.url, DATA.avatarUrl);

  if (!post) {
    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 60,
          background: "white",
        }}
      >
        Post Not Found
      </div>,
      size,
    );
  }

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      })
    : "";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fafafa",
        padding: 80,
        fontFamily: "system-ui",
      }}
    >
      {/* Top */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {avatarUrl && (
          <Image
            alt={DATA.name}
            src={avatarUrl}
            width={80}
            height={80}
            style={{
              borderRadius: 16,
              border: "2px solid #e5e5e5",
            }}
          />
        )}

        <div
          style={{
            fontSize: 28,
            color: "#666",
          }}
        >
          {DATA.name}
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.1,
          color: "#000",
          maxWidth: 900,
        }}
      >
        {post.title}
      </div>

      {/* Footer */}
      <div
        style={{
          fontSize: 24,
          color: "#555",
        }}
      >
        {publishedDate}
      </div>
    </div>,
    size,
  );
}
