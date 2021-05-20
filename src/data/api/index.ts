import wretch, {ResponseChain, Wretcher} from 'wretch';
import {SearchSongsResponse, Song} from '../models';
import endpoints from './endpoints';

export const BASE_URL = 'https://itunes.apple.com/';

export const apiUrl = (endpoint: string) => `${BASE_URL}${endpoint}`;

const searchSongs = async (term: string): Promise<Song[]> => {
  const res: ResponseChain = await wretch(apiUrl(endpoints.searchSongs))
    .query({
      term,
    })
    .get();
  const data = await res.json<SearchSongsResponse>();
  return data.results.filter(song=>song.wrapperType === 'track');
};

export default {
  searchSongs,
};
