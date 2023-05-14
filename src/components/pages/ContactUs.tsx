import { useNavigate } from 'react-router-dom';
import MainTemplate from '../templates/Main';
import { usePost } from '@/hooks/usePost';

export const ContactUs = () => {
  const navigate = useNavigate();
  const { onSearchPosts } = usePost();

  return (
    <MainTemplate
      onSearch={onSearchPosts}
      onSearchResultClick={(post) => {
        navigate('/blog/' + post.id);
      }}
    >
      <div className="flex flex-col items-center justify-center h-124 bg-orange-50">
        <div className="bg-white p-4 rounded-lg shadow-lg w-96">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-bold">Address:</h2>
              <p className="text-gray-800">
                123 Main Street
                <br />
                Anytown, USA 12345
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold">Email:</h2>
              <a
                href="mailto:info@example.com"
                className="text-gray-800 hover:underline"
              >
                info@example.com
              </a>
            </div>
            <div>
              <h2 className="text-lg font-bold">Phone:</h2>
              <p className="text-gray-800">(123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};
