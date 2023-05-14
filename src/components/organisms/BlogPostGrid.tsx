import BlogPostCard from '../molecules/BlogPostCard';

const BlogGrid = ({ posts, onCardClick }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 p-6 justify-items-center">
      {posts.map((post) => (
        <BlogPostCard
          key={'blog-post-' + post.id}
          title={post.title}
          thumbnail={post.thumbnail}
          onClick={() => onCardClick(post)}
        />
      ))}
    </div>
  );
};

export default BlogGrid;
