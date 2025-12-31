import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { PostCard } from '@/components/PostCard';

export default function HomePage() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Bonjour
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl">
            Bienvenue dans mon coin d&apos;Internet. Un espace personnel où je partage mes pensées et découvertes.
          </p>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="pb-20">
        <h2 className="text-2xl font-serif font-semibold text-stone-900 mb-8">
          Articles récents
        </h2>

        {latestPosts.length > 0 ? (
          <div className="space-y-12">
            {latestPosts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-stone-200 rounded-lg">
            <p className="text-stone-500">Aucun article pour le moment</p>
          </div>
        )}
        
        {posts.length > 3 && (
          <div className="mt-12">
            <Link
              href="/blog"
              className="text-stone-900 hover:text-stone-600 font-medium transition-colors inline-flex items-center gap-2 group"
            >
              <span>Tous les articles</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

