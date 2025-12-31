import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, PostFrontmatter } from './types';
import { calculateReadingTime } from './readingTime';

const postsDirectory = path.join(process.cwd(), 'content/posts');

/**
 * Get all posts from the content/posts directory
 * Only returns published posts in production
 */
export function getAllPosts(): Post[] {
  // Ensure directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const frontmatter = data as PostFrontmatter;
      
      return {
        slug,
        content,
        readingTime: calculateReadingTime(content),
        ...frontmatter,
      } as Post;
    });

  // Filter unpublished posts in production
  const posts = process.env.NODE_ENV === 'production'
    ? allPosts.filter((post) => post.published)
    : allPosts;

  // Sort by date descending
  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const frontmatter = data as PostFrontmatter;

    // In production, don't return unpublished posts
    if (process.env.NODE_ENV === 'production' && !frontmatter.published) {
      return null;
    }

    return {
      slug,
      content,
      readingTime: calculateReadingTime(content),
      ...frontmatter,
    } as Post;
  } catch (error) {
    return null;
  }
}

/**
 * Get all unique tags from all posts
 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();
  
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

/**
 * Get all post slugs for static generation
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

