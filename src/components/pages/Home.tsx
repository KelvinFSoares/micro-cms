import SimpleText from '../atoms/SimpleText';
import VideoIFrame from '../atoms/VideoIFrame';
import ImageRow from '../molecules/ImageRow';
import ImageText from '../molecules/ImageText';
import { useNavigate } from 'react-router-dom';
import MainTemplate from '../templates/Main';
import { usePost } from '@/hooks/usePost';

export const Home = () => {
  const navigate = useNavigate();
  const { onSearchPosts } = usePost();

  return (
    <MainTemplate
      onSearch={onSearchPosts}
      onSearchResultClick={(post) => {
        navigate('/blog/' + post.id);
      }}
    >
      <div className="flex">
        <div className="w-1/2 py-16 mr-8">
          <SimpleText size="sm" color="black">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </SimpleText>

          <VideoIFrame
            videoUrl="https://www.youtube.com/watch?v=swgSKdVjxjE"
            iframeWidth="40"
            iframeHeight="40"
            title="Youtube example title"
          />
        </div>
        <div className="w-1/2 py-16">
          <ImageText
            imageSource="data:image/jpeg;base64,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"
            imageAlt="cinema"
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </ImageText>
          <div className="mt-8"></div>
          <ImageRow
            imagesData={[
              {
                imageSource:
                  'https://images.indianexpress.com/2019/12/hero-thambi-blog-759.jpg',
                alt: 'Hero movie banner',
              },
              {
                imageSource:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOC7lHblIOLJQYxbL2pBTW39HfvN7iMn-1qC2KAdGC89zT-XIEBqZGr3wxxkz8aOsUW0&usqp=CAU',
                alt: 'Indian movie banner',
              },
              {
                imageSource:
                  'https://i.pinimg.com/736x/43/06/0c/43060c1ebb834938dea4f238f9632974--shane-black-gwyneth-paltrow.jpg',
                alt: 'Iron man 3 banner',
              },
            ]}
          />
        </div>
      </div>
    </MainTemplate>
  );
};
