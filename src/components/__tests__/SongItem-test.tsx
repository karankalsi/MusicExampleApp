import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, render, waitFor} from '@testing-library/react-native';
import SongItem, {SongItemProps} from '../SongItem';
import searchSongsStub from '../../stub/searchSongs.json';
import testIds from '../../commons/testIds';
import { Song } from '../../data/models';

describe('testing ui component SongItem', () => {
  const defaultProps: SongItemProps = {
    song: (searchSongsStub.results as Song[])[0],
  };

  beforeEach(() => {});
  afterEach(cleanup);
  it('rendering correctly', () => {
    renderer.create(<SongItem {...defaultProps} />);
  });
  it('matches with snapshot', () => {
    const {toJSON} = render(<SongItem {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('data loading correctly', () => {
    const {getByTestId} = render(<SongItem {...defaultProps} />);
    expect(getByTestId(testIds.SongItem.Title).props.children).toBe(defaultProps.song.trackName);
    expect(getByTestId(testIds.SongItem.Artist).props.children).toContain(defaultProps.song.artistName);
    expect(getByTestId(testIds.SongItem.Artwork).props.source.uri).toBe(defaultProps.song.artworkUrl60); 
  });
});
