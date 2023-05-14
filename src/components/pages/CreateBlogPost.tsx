import { usePost } from '@/hooks/usePost';
import BlogPostForm from '../organisms/BlogPostForm';
import MainTemplate from '../templates/Main';
import { useNavigate } from 'react-router-dom';

export const CreateBlogPost = () => {
  const { addPost, onSearchPosts } = usePost();
  const navigate = useNavigate();
  return (
    <>
      <MainTemplate
        onSearch={onSearchPosts}
        onSearchResultClick={(post) => {
          navigate('/blog/' + post.id);
        }}
      >
        <BlogPostForm onSubmit={addPost} />
      </MainTemplate>
    </>
  );
};
