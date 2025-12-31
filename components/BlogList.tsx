'use client';

import { useState, useMemo } from 'react';
import { Post } from '@/lib/types';
import { PostCard } from './PostCard';
import { SearchBox } from './SearchBox';
import { TagPill } from './TagPill';

interface BlogListProps {
  posts: Post[];
  allTags: string[];
}

export function BlogList({ posts, allTags }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by selected tag
    if (selectedTag) {
      filtered = filtered.filter((post) => post.tags.includes(selectedTag));
    }

    return filtered;
  }, [posts, searchQuery, selectedTag]);

  return (
    <div>
      {/* Search and Filter Section */}
      <div className="mb-10 space-y-4">
        <SearchBox
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Rechercher..."
        />

        {allTags.length > 0 && (
          <div>
            <div className="flex flex-wrap gap-2">
              <TagPill
                tag="Tout"
                active={selectedTag === null}
                onClick={() => setSelectedTag(null)}
              />
              {allTags.map((tag) => (
                <TagPill
                  key={tag}
                  tag={tag}
                  active={selectedTag === tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results count */}
      {(searchQuery || selectedTag) && (
        <div className="mb-6 text-sm text-stone-600">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'résultat' : 'résultats'}
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-12">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))
        ) : (
          <div className="text-center py-16 border border-stone-200 rounded-lg">
            <p className="text-stone-500 mb-4">
              Aucun article trouvé
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag(null);
              }}
              className="text-stone-900 hover:text-stone-600 font-medium transition-colors"
            >
              Réinitialiser
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

