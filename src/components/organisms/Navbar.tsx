import NavItem from '../atoms/NavItem';
import SearchBar from '../molecules/SearchBar';
import Logo from '../atoms/Logo';

const NavBar = ({ onSearch, onSearchResultClick }) => {
  return (
    <nav className="bg-orange-50 top-0 border-b-4">
      <div className="container mx-auto md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center ">
          <Logo />
        </div>
        <div className="md:flex md:items-center mt-4 md:mt-0">
          <NavItem label="Home" href="/" />
          <NavItem label="About" href="/about" />
          <NavItem label="Blog" href="/blog" />
          <NavItem label="Contact" href="/contact-us" />
        </div>
        <SearchBar
          onSearch={onSearch}
          onResultClick={onSearchResultClick}
          searchLabel={'SEARCH THE SITE'}
        />
      </div>
    </nav>
  );
};

export default NavBar;
