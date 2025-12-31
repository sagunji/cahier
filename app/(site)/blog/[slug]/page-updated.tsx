import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";
import { TagPill } from "@/components/TagPill";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const htmlContent = await markdownToHtml(post.content);

  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Article Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center text-sm text-stone-500 mb-4 gap-3">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>·</span>
          <span>{post.readingTime} min</span>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
        )}
      </header>

      {/* Article Content */}
      <div
        className="prose prose-stone max-w-none
          prose-headings:font-serif prose-headings:font-semibold prose-headings:text-stone-900
          prose-h1:text-3xl prose-h1:mb-4 prose-h1:mt-8
          prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-8
          prose-h3:text-xl prose-h3:mb-2 prose-h3:mt-6
          prose-p:text-stone-700 prose-p:leading-relaxed
          prose-a:text-stone-900 prose-a:underline hover:prose-a:text-stone-600
          prose-strong:text-stone-900 prose-strong:font-semibold
          prose-code:text-stone-900 prose-code:bg-stone-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal
          prose-pre:bg-stone-900 prose-pre:text-stone-100
          prose-blockquote:border-l-4 prose-blockquote:border-stone-300 prose-blockquote:pl-4 prose-blockquote:italic
          prose-ul:list-disc
          prose-ol:list-decimal
          prose-li:text-stone-700
          prose-img:rounded-lg"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Back to Blog Link */}
      <div className="mt-12 pt-8 border-t border-stone-200">
        <a
          href="/blog"
          className="text-stone-600 hover:text-stone-900 transition-colors inline-flex items-center gap-2 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          Retour
        </a>
      </div>
    </article>
  );
}

