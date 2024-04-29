import { useMemo } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  // Додайте інші властивості, якщо вони є
}

export const useSortedPosts = (posts: Post[], sort: string) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort as keyof Post].toString().localeCompare(b[sort as keyof Post].toString()));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts: Post[], sort: string, query: string) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
