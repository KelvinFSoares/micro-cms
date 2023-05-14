import { About } from './components/pages/About';
import { Blog } from './components/pages/Blog';
import { ContactUs } from './components/pages/ContactUs';
import { Home } from './components/pages/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PostsProvider } from './context/usePostContext';
import { CreateBlogPost } from './components/pages/CreateBlogPost';
import { PostPage } from './components/pages/PostPage';

function App() {
  return (
    <Router>
      <PostsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog/create" element={<CreateBlogPost />} />
          <Route path="/blog/:postId" element={<PostPage />} />
        </Routes>
      </PostsProvider>
    </Router>
  );
}

export default App;
