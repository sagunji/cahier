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
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 notebook-line">
      {/* Article Header */}
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-handwritten font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center text-gray-600 text-base mb-6 gap-3 font-handwritten">
          <time dateTime={post.date}>📅 {formattedDate}</time>
          <span className="text-purple-400">•</span>
          <span>⏱️ {post.readingTime} min de lecture</span>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
        )}

        {/* Decorative divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          <span className="text-2xl">✨</span>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
        </div>
      </header>

      {/* Article Content */}
      <div
        className="prose prose-lg max-w-none
          prose-headings:font-handwritten prose-headings:font-bold prose-headings:text-gray-900
          prose-h1:text-3xl prose-h1:mb-4 prose-h1:mt-8
          prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-8 prose-h2:text-purple-800
          prose-h3:text-xl prose-h3:mb-2 prose-h3:mt-6
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-5
          prose-a:text-purple-600 prose-a:underline prose-a:decoration-wavy hover:prose-a:text-purple-800
          prose-strong:text-gray-900 prose-strong:font-bold
          prose-em:text-purple-700 prose-em:font-serif
          prose-code:text-pink-700 prose-code:bg-pink-50 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:border prose-code:border-pink-200
          prose-pre:bg-slate-900 prose-pre:rounded-xl prose-pre:shadow-xl prose-pre:border-2 prose-pre:border-purple-200
          prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:bg-purple-50 prose-blockquote:py-4 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg prose-blockquote:font-serif
          prose-ul:list-none prose-ul:pl-6
          prose-ul>li:before:content-['✦'] prose-ul>li:before:text-purple-500 prose-ul>li:before:mr-2
          prose-ol:list-decimal prose-ol:pl-6
          prose-li:text-gray-700 prose-li:mb-2 prose-li:leading-relaxed
          prose-img:rounded-2xl prose-img:shadow-2xl prose-img:border-4 prose-img:border-white"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Decorative end mark */}
      <div className="text-center my-12">
        <span className="text-4xl">✿</span>
      </div>

      {/* Back to Blog Link */}
      <div className="mt-8 pt-6 border-t-2 border-purple-200">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 font-handwritten text-lg hover:gap-3 transition-all group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          Retour aux articles
        </a>
      </div>
    </article>
  );
}

