import { describe, it, vi } from 'vitest';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBar from './SearchBar';

const fakePosts = [
  {
    id: 1,
    title: 'a title 1',
    content: 'content 1',
    thumbnail: 'thumbnail src 1',
  },
  {
    id: 2,
    title: 'b title 2',
    content: 'content 2',
    thumbnail: 'thumbnail src 2',
  },
  {
    id: 3,
    title: 'c title 3',
    content: 'content 3',
    thumbnail: 'thumbnail src 3',
  },
];

describe('tests the SearchBar molecule component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn(() => {
        return {
          matches: true,
          addListener: vi.fn(),
          removeListener: vi.fn(),
        };
      }),
    });
  });

  it('should render text input and label', () => {
    render(
      <SearchBar
        onSearch={function (searchParam: string) {
          throw new Error('Function not implemented.');
        }}
        onResultClick={function (resultObject: any) {
          throw new Error('Function not implemented.');
        }}
        searchLabel={'ENTER KEYWORD'}
        placeholder="type anything here"
      />
    );
    expect(screen.getByLabelText('ENTER KEYWORD')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('type anything here')
    ).toBeInTheDocument();
  });

  it('should run onSearch function after debounce time only', async () => {
    const onSearchMocked = vi.fn();
    const onResultsClickedMocked = vi.fn();
    render(
      <SearchBar
        onSearch={onSearchMocked}
        onResultClick={onResultsClickedMocked}
        searchLabel={'ENTER KEYWORD'}
        placeholder="type anything here"
      />
    );
    const input = screen.getByPlaceholderText('type anything here');
    expect(onSearchMocked).toBeCalledTimes(0); // not called immediately
    userEvent.type(input, 'a');
    await waitFor(() => expect(onSearchMocked).toBeCalledTimes(1), {
      timeout: 700,
    }); // to be called after the debounce time
  });

  it('should show results from search function as autocomplete options', async () => {
    const onSearchMocked = (searchParam: string) => {
      return fakePosts.filter((post) => post.title.includes(searchParam));
    };

    render(
      <SearchBar
        onSearch={onSearchMocked}
        onResultClick={function (resultObject: any) {
          throw new Error('Function not implemented.');
        }}
        searchLabel={'ENTER KEYWORD'}
        placeholder="type anything here"
      />
    );
    const input = screen.getByPlaceholderText('type anything here');

    //type 'b' and expect to see second post title 'b title 2' on the screen

    userEvent.type(input, 'b');
    await waitFor(
      () => expect(screen.getByText(fakePosts[1].title)).toBeInTheDocument(),
      {
        timeout: 800,
      }
    );
  });

  it('should run onResultClick when user clicks on a autocomplete suggestion', async () => {
    const onResultClickMock = vi.fn();
    const onSearchMocked = (searchParam: string) => {
      return fakePosts.filter((post) => post.title.includes(searchParam));
    };

    render(
      <SearchBar
        onSearch={onSearchMocked}
        onResultClick={onResultClickMock}
        searchLabel={'ENTER KEYWORD'}
        placeholder="placeholder example"
      />
    );
    const input = screen.getByPlaceholderText('placeholder example');

    userEvent.type(input, 'c');
    await waitFor(
      () => {
        const autocompleteElement = screen.getByText(fakePosts[2].title);
        userEvent.click(autocompleteElement);
        expect(onResultClickMock).toHaveBeenCalled();
      },
      {
        timeout: 800,
      }
    );
  });
});
