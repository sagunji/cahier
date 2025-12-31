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
      <div className="mb-8 space-y-5 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-purple-200">
        <SearchBox
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Rechercher un article..."
        />

        {allTags.length > 0 && (
          <div>
            <h3 className="text-lg font-handwritten font-semibold text-gray-700 mb-3">Filtrer par thème:</h3>
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
        <div className="mb-4 text-base text-gray-600 font-handwritten">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'article trouvé' : 'articles trouvés'} 📝
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))
        ) : (
          <div className="text-center py-16 bg-white/50 rounded-2xl border-2 border-dashed border-purple-300">
            <div className="mb-4 text-6xl">🔍</div>
            <p className="text-gray-600 mb-6 font-handwritten text-xl">
              Aucun article ne correspond à votre recherche...
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag(null);
              }}
              className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all font-handwritten text-lg shadow-lg hover:-translate-y-1 transform"
            >
              Réinitialiser
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

