import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import Label from '../atoms/Label';
import TextInput from '../atoms/TextInput';
import ListPanelItem from '../atoms/ListPanelItem';
import ListPanel from '../atoms/ListPanel';

export interface SearchBarProps extends React.ComponentPropsWithoutRef<'div'> {
  onSearch: (searchParam: string) => any;
  onResultClick: (resultObject: any) => any;
  searchLabel: string;
  placeholder?: string;
}

type Timer = ReturnType<typeof setTimeout>;

const SearchBar: FunctionComponent<SearchBarProps> = ({
  onSearch,
  onResultClick,
  searchLabel,
  placeholder,
}) => {
  const [timer, setTimer] = useState<Timer>();
  const [results, setResults] = useState([]);

  const onSearchDebounced = (searchParam: string) => {
    const newTimer = setTimeout(() => {
      const result = onSearch(searchParam);
      setResults(() => result);
    }, 500);
    clearTimeout(timer);
    setTimer(newTimer);
  };

  return (
    <div>
      <Label htmlFor="searchInput" fontSize="8" color="black">
        {searchLabel}
      </Label>
      <div className="flex">
        <TextInput
          placeholder={placeholder}
          id="searchInput"
          onChange={(e) => onSearchDebounced(e.target.value)}
        />
      </div>
      <div className="relative">
        {results?.length > 0 && (
          <ListPanel>
            {results.map((result) => (
              //this is not good
              <ListPanelItem key={result.title + '' + result.id}>
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
