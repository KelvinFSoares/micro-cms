import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { IPost } from '../models/post';
import { getStorageValue, setStorageValue } from '@/utils/storageUtils';

const POSTS_LOCAL_KEY = 'posts';

export const PostContext = createContext({
  posts: {} as Partial<IPost[]>,
  setPosts: {} as Dispatch<SetStateAction<Partial<IPost[]>>>,
  addPost: {} as (post: IPost) => void,
  getPost: {} as (id: number) => IPost,
  onSearchPosts: {} as (searchParam: string) => string[],
});

export function PostsProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState(() => {
    return getStorageValue(POSTS_LOCAL_KEY, [] as IPost[]);
  });

  const addPost = (post: IPost) => {
    post.id = posts.length + 1;
    setPosts((currentValue) => {
      setStorageValue(POSTS_LOCAL_KEY, [...currentValue, post]);
      return [...currentValue, post];
    });
  };

  const getPost = (id: number) => {
    if (Number(id) && Number(id) > 0) {
      const results = posts.filter((post) => post.id === id);
      if (results.length > 0) {
        return results[0];
      } else {
        // should redirect to home
        alert('404 - post not found');
        return {};
      }
    }
  };

  const onSearchPosts = (searchParam: string) => {
    if (searchParam !== '') {
      return posts.filter((post) => post.title.includes(searchParam));
    } else {
      return [];
    }
  };

  return (
    <PostContext.Provider
      value={{ posts, setPosts, addPost, getPost, onSearchPosts }}
    >
      {children}
    </PostContext.Provider>
  );
}
