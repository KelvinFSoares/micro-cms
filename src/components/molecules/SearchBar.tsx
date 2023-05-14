import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import Label from '../atoms/Label';
import TextInput from '../atoms/TextInput';
import ListPanelItem from '../atoms/ListPanelItem';
import ListPanel from '../atoms/ListPanel';

interface SearchBarProps extends React.ComponentPropsWithoutRef<'div'> {
  onSearch: (searchParam: string) => any;
  onResultClick: (resultObject: any) => any;
  searchLabel: string;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  onSearch,
  onResultClick,
  searchLabel,
}) => {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchTerm) {
        setResults(() => onSearch(inputRef.current.value));
      } else {
        setResults(() => []);
      }
    }, 500);
    return () => clearTimeout(timerId);
  }, [searchTerm]);

  const handleInputChange = () => {
    setSearchTerm(inputRef.current.value);
  };

  return (
    <div>
      <Label htmlFor="searchInput" fontSize="8" color="black">
        {searchLabel}
      </Label>
      <div className="flex">
        <TextInput
          placeholder="ENTER KEYWORD"
          id="searchInput"
          value={searchTerm}
          onChange={handleInputChange}
          innerRef={inputRef}
        />
      </div>
      <div className="relative">
        {results.length > 0 && (
          <ListPanel>
            {results.map((result) => (
              <ListPanelItem key={result.title}>
                <span
                  className="ml-2 text-black"
                  onClick={() => onResultClick(result)}
                >
                  {result.title}
                </span>
              </ListPanelItem>
            ))}
          </ListPanel>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
