import Link from 'next/link';
import { Post } from '@/lib/types';
import { TagPill } from './TagPill';

interface PostCardProps {
  post: Post;
  index?: number;
}

export function PostCard({ post, index = 0 }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const rotations = ['rotate-0', '-rotate-1', 'rotate-1'];
  const rotation = rotations[index % rotations.length];

  return (
    <article className={`group bg-white/80 backdrop-blur-sm rounded-lg border-2 border-purple-200 p-6 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300 hover:-translate-y-2 ${rotation} hover:rotate-0 relative overflow-hidden`}>
      {/* Paper clip decoration */}
      <div className="absolute -top-3 right-8 w-12 h-6 border-2 border-purple-300 rounded-full transform rotate-45 opacity-50"></div>
      
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-2xl md:text-3xl font-handwritten font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
          {post.title}
        </h2>
      </Link>
      
      <div className="flex items-center text-sm text-gray-600 mb-4 gap-3 font-handwritten">
        <time dateTime={post.date}>
          📅 {formattedDate}
        </time>
        <span className="text-purple-400">•</span>
        <span>
          ⏱️ {post.readingTime} min
        </span>
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed line-clamp-2">
        {post.description}
      </p>

      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      )}
      
      {/* Corner fold effect */}
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-purple-100 transform rotate-45 translate-x-4 translate-y-4 opacity-50"></div>
    </article>
  );
}

