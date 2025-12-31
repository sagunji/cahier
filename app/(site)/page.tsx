import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { PostCard } from '@/components/PostCard';

export default function HomePage() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20 relative">
        {/* Decorative ink spots */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-full ink-stain"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-pink-200 rounded-full ink-stain" style={{animationDelay: '1s'}}></div>
        
        <div className="text-center relative z-10">
          <div className="inline-block mb-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-handwritten font-bold text-purple-800 mb-2 transform -rotate-2">
              Bonjour! 👋
            </h1>
            <div className="h-1 bg-purple-400 rounded-full transform scale-x-110"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-2xl mx-auto italic">
            Bienvenue dans mon coin d&apos;Internet
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Un journal personnel où je partage mes pensées, mes découvertes et mes aventures.
          </p>
          
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full font-handwritten text-xl hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Lire mes articles ✨
          </Link>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="pb-16">
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-handwritten font-bold text-gray-800 inline-block relative">
            Derniers articles
            <svg className="absolute -bottom-2 left-0 w-full h-3" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,2 Q25,0 50,2 T100,2 T150,2 T200,2 T250,2 T300,2" 
                    fill="none" 
                    stroke="#a78bfa" 
                    strokeWidth="3" 
                    strokeLinecap="round"/>
            </svg>
          </h2>
        </div>

        {latestPosts.length > 0 ? (
          <div className="space-y-6">
            {latestPosts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/50 rounded-2xl border-2 border-dashed border-purple-300">
            <p className="text-gray-600 font-handwritten text-xl">Aucun article pour le moment...</p>
          </div>
        )}
        
        {posts.length > 3 && (
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 font-handwritten text-xl transition-all group"
            >
              <span>Voir tous les articles</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

