import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, render, waitFor} from '@testing-library/react-native';
import fetchMock from 'fetch-mock';
import SongsList, {SONGS_SEARCH_TERM, SongsListProps} from '../SongsList';
import {apiUrl} from '../../data/api';
import endpoints from '../../data/api/endpoints';
import searchSongsStub from '../../stub/searchSongs.json';
import testIds from '../../commons/testIds';

describe('testing screen SongsList', () => {
  const defaultProps: SongsListProps = {
    componentId: 'Component1',
  };

  beforeEach(() => {
    fetchMock.reset();
  });

  afterEach(() => {
    cleanup();
  });

  it('rendering correctly', () => {
    expect(renderer.create(<SongsList {...defaultProps} />)).toBeTruthy();
  });
  it('matches with snapshot', () => {
    const {toJSON} = render(<SongsList {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('data loading correctly', async () => {
    fetchMock.get(
      apiUrl(endpoints.searchSongs),
      {
        status: 200,
        body: searchSongsStub,
      },
      {
        query: {
          term: SONGS_SEARCH_TERM,
        },
        delay: 100,
      },
    );

    const {getByTestId, queryByTestId} = render(
      <SongsList {...defaultProps} />,
    );

    expect(
      getByTestId(testIds.SongsList.Loader)?.props['animating'],
    ).toBeTruthy();
    expect(getByTestId(testIds.SongsList.Flatlist)?.props['data'].length).toBe(
      0,
    );
    await waitFor(() =>
      expect(
        queryByTestId(testIds.SongsList.Loader)?.props['animating'],
      ).toBeFalsy(),
    );
    expect(
      getByTestId(testIds.SongsList.Flatlist)?.props['data'].length,
    ).toBeGreaterThan(0);
  });
});
