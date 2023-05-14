import BlogPostViewer from '../organisms/BlogPostViewer';
import { useParams } from 'react-router-dom';
import MainTemplate from '../templates/Main';
import { usePost } from '@/hooks/usePost';

export const PostPage = () => {
  const { getPost } = usePost();
  const { postId } = useParams();

  return (
    <MainTemplate>
      <BlogPostViewer post={getPost(Number(postId))} />
    </MainTemplate>
  );
};
