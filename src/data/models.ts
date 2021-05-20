export interface Song {
  wrapperType?: 'audiobook' | 'track',
  artistId?: number;
  collectionId?: number;
  artistName: string;
  collectionName?: string;
  collectionCensoredName?: string;
  artistViewUrl?: string;
  collectionViewUrl?: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackCount?: number;
  copyright?: string;
  releaseDate: string;
  primaryGenreName: string;
  previewUrl: string;
  description?: string;
  amgArtistId?: number;
  trackId?: number;
  trackName?: string;
  trackCensoredName?: string;
  trackViewUrl?: string;
  artworkUrl30?: string;
  trackPrice?: number;
  discCount?: number;
  discNumber?: number;
  trackNumber?: number;
  trackTimeMillis?: number;
  contentAdvisoryRating?: string;
  isStreamable?: boolean;
  collectionArtistId?: number;
  collectionArtistName?: string;
  collectionArtistViewUrl?: string;
  trackRentalPrice?: number;
  collectionHdPrice?: number;
  trackHdPrice?: number;
  trackHdRentalPrice?: number;
  longDescription?: string;
  hasITunesExtras?: boolean;
  shortDescription?: string;
}

export interface SearchSongsResponse {
  resultCount: number;
  results: Song[];
}
