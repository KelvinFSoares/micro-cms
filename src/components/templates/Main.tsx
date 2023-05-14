import React from 'react';
import NavBar from '../organisms/Navbar';
import HeroSection from '../molecules/HeroSection';

const MainTemplate = ({ onSearch, onSearchResultClick, children }) => {
  return (
    <>
      <NavBar onSearch={onSearch} onSearchResultClick={onSearchResultClick} />
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
