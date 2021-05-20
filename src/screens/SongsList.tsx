import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  FlatList,
  Text,
  View,
} from 'react-native';
import {
  NavigationComponentProps,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import colors from '../commons/colors';
import fonts from '../commons/fonts';
import styles from '../commons/styles';
import testIds from '../commons/testIds';
import SongItem from '../components/SongItem';
import api from '../data/api';
import {Song} from '../data/models';
import AppNavigation from '../lib/navigation';
import SongListStyles from './styles/SongListStyles';

export const SONGS_SEARCH_TERM = 'Michael jackson';

export interface SongsListProps extends NavigationComponentProps {}

const Loader = (props: ActivityIndicatorProps): React.ReactElement => {
  return props.animating ? (
    <View style={SongListStyles.loader}>
      <ActivityIndicator {...props} animating={props.animating} />
      <Text style={SongListStyles.loaderText}>Please wait</Text>
    </View>
  ) : (
    <></>
  );
};

type LoadSongsEffectResponse = [boolean, Song[] | undefined];

const loadSongsEffect = (deps: any[]): LoadSongsEffectResponse => {
  const [isSongsLoading, setIsSongsLoading] = React.useState<boolean>(false);
  const [songs, setSongs] = React.useState<Song[]>([]);
  React.useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setIsSongsLoading(true);
      const songs = await api.searchSongs(SONGS_SEARCH_TERM);
      if (mounted) {
        setSongs(songs);
        setIsSongsLoading(false);
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, deps);

  return [isSongsLoading, songs];
};

const navigateToDetail = (componentId: string, song: Song) => {
  AppNavigation.push(componentId, {
    component: {
      name: 'SongDetail',
      passProps: {
        song,
      },
    },
  });
};

const SongsList: NavigationFunctionComponent<SongsListProps> = props => {
  const [isLoading, songs] = loadSongsEffect([]);

  const onSongPressCallback = React.useCallback(
    (song: Song) => navigateToDetail(props.componentId, song),
    [props.componentId],
  );

  return (
    <View style={styles.defaultScreenContainer}>
      <FlatList<Song>
        testID={testIds.SongsList.Flatlist}
        style={SongListStyles.songsList}
        data={songs}
        renderItem={({item}) => (
          <SongItem song={item} onSongPress={onSongPressCallback} />
        )}
        keyExtractor={item =>
          `${item.trackId}${item.collectionId}${item.artistId}`
        }
      />
      <Loader
        testID={testIds.SongsList.Loader}
        color={colors.primaryDark}
        animating={isLoading}
      />
    </View>
  );
};

SongsList.options = {
  topBar: {
    title: {
      color: colors.accent,
      alignment: 'center',
      text: 'Songs',
    },
  },
};

export default SongsList;
