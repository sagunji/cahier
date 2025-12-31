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

  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-stone-900 mb-3 group-hover:text-stone-600 transition-colors">
          {post.title}
        </h2>
      </Link>
      
      <div className="flex items-center text-sm text-stone-500 mb-3 gap-3">
        <time dateTime={post.date}>{formattedDate}</time>
        <span>·</span>
        <span>{post.readingTime} min</span>
      </div>

      <p className="text-stone-600 mb-4 leading-relaxed">
        {post.description}
      </p>

      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      )}
    </article>
  );
}

