import BlogPostViewer from '../organisms/BlogPostViewer';
import { useNavigate, useParams } from 'react-router-dom';
import MainTemplate from '../templates/Main';
import { usePost } from '@/hooks/usePost';

export const PostPage = () => {
  const { getPost, onSearchPosts } = usePost();
  const { postId } = useParams();
  const navigate = useNavigate();

  return (
    <MainTemplate
      onSearch={onSearchPosts}
      onSearchResultClick={(post) => {
        navigate('/blog/' + post.id);
      }}
    >
      <BlogPostViewer post={getPost(Number(postId))} />
    </MainTemplate>
  );
};
