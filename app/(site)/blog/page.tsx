import { Metadata } from 'next';
import { getAllPosts, getAllTags } from '@/lib/posts';
import { BlogList } from '@/components/BlogList';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Tous mes articles et réflexions personnelles',
  openGraph: {
    title: 'Articles | Cahier',
    description: 'Tous mes articles et réflexions personnelles',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-3">
          Tous les articles
        </h1>
        <p className="text-stone-600">
          {posts.length} {posts.length === 1 ? 'article' : 'articles'}
        </p>
      </div>

      <BlogList posts={posts} allTags={allTags} />
    </div>
  );
}

