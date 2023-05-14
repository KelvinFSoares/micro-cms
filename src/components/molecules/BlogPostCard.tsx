import { FunctionComponent } from 'react';
import Image from '../atoms/Image';
import SimpleText from '../atoms/SimpleText';

interface BlogPostCardProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  thumbnail: string;
}

const BlogPostCard: FunctionComponent<BlogPostCardProps> = ({
  title,
  thumbnail,
  ...rest
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md w-72 h-96 cursor-pointer"
      {...rest}
    >
      <Image
        src={thumbnail}
        alt={title + ' thumbnail'}
        width="72"
        height="60"
      />
      <div className="p-6">
        <SimpleText size="2xl" color="black">
          {title}
        </SimpleText>
      </div>
    </div>
  );
};

export default BlogPostCard;
