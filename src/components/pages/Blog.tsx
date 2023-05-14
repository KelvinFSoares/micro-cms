import { useNavigate } from 'react-router-dom';
import BlogGrid from '../organisms/BlogPostGrid';
import Button from '../atoms/Button';
import MainTemplate from '../templates/Main';
import { usePost } from '@/hooks/usePost';

export const Blog = () => {
  const navigate = useNavigate();
  const { posts } = usePost();

  return (
    <MainTemplate>
      <div className="w-full flex justify-center p-8">
        <Button
          label="Create new Post"
          type="button"
          onClick={() => navigate('/blog/create')}
        />
      </div>
      <BlogGrid
        posts={posts}
        onCardClick={(post) => navigate('/blog/' + post.id)}
      />
    </MainTemplate>
  );
};
