import { PostContext } from '@/context/usePostContext';
import { useContext } from 'react';

const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePost must be used within a PostContext');
  }
  return context;
};

export { usePost };
