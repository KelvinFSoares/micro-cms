import { usePost } from '@/hooks/usePost';
import BlogPostForm from '../organisms/BlogPostForm';
import MainTemplate from '../templates/Main';

export const CreateBlogPost = () => {
  const { addPost } = usePost();

  return (
    <>
      <MainTemplate>
        <BlogPostForm onSubmit={addPost} />
      </MainTemplate>
    </>
  );
};
