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
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-handwritten font-bold text-gray-900 mb-4 inline-block relative">
          Tous mes articles
          <svg className="absolute -bottom-3 left-0 w-full h-4" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,2 Q50,0 100,2 T200,2 T300,2 T400,2" 
                  fill="none" 
                  stroke="#a78bfa" 
                  strokeWidth="3" 
                  strokeLinecap="round"/>
          </svg>
        </h1>
        <p className="text-lg text-gray-600 mt-6 font-handwritten">
          {posts.length} {posts.length === 1 ? 'article' : 'articles'} ✍️
        </p>
      </div>

      <BlogList posts={posts} allTags={allTags} />
    </div>
  );
}

