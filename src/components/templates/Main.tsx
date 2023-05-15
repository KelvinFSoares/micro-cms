import React from 'react';
import NavBar from '../organisms/Navbar';
import HeroSection from '../molecules/HeroSection';
import { useNavigate } from 'react-router-dom';
import { usePost } from '@/hooks/usePost';

const MainTemplate = ({ children }) => {
  // this is not good, should create a HOC to inject these props from outside
  const navigate = useNavigate();
  const { onSearchPosts } = usePost();

  return (
    <>
      <NavBar
        onSearch={onSearchPosts}
        onSearchResultClick={(post) => {
          navigate('/blog/' + post.id);
        }}
      />
      <main className="container bg-orange-50 flex-grow mx-auto w-full">
        <HeroSection classNames="relative h-96 mt-4 mb-8" />

        {children}
      </main>
      <footer className="bg-gray-800 p-4 text-white text-center">
        &copy; 2023 Micro CMS
      </footer>
    </>
  );
};

export default MainTemplate;
