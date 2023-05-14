import React from 'react';
import sanitizeHtml from 'sanitize-html';
import Image from '../atoms/Image';

const BlogPostViewer = ({ post }) => {
  const sanitizedContent = sanitizeHtml(post.content);
  return (
    <div className="max-w-2xl mx-auto my-10">
      <Image
        width="full"
        height="full"
        src={post.thumbnail}
        alt={post.title + 'thumbnail'}
      />
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      ></div>
    </div>
  );
};

export default BlogPostViewer;
