import React, {FunctionComponent} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import testIds from '../commons/testIds';
import {Song} from '../data/models';
import SongItemStyles from './styles/SongItemStyles';

export interface SongItemProps extends TouchableOpacityProps {
  song: Song;
  onSongPress?: (song: Song) => void;
}
const SongItem: FunctionComponent<SongItemProps> = props => {
  const {song, onSongPress} = props;
  const onPressCallback = React.useCallback(
    () => onSongPress && onSongPress(song),
    [onSongPress, song],
  );
  return (
    <TouchableOpacity
      style={SongItemStyles.container}
      onPress={onPressCallback}>
      <Image
        testID={testIds.SongItem.Artwork}
        style={SongItemStyles.artwork}
        source={{uri: song.artworkUrl60}}
      />
      <View style={SongItemStyles.infoContainer}>
        <Text
          testID={testIds.SongItem.Title}
          style={SongItemStyles.title}
          numberOfLines={2}>
          {song.trackName}
        </Text>
        <Text
          testID={testIds.SongItem.Artist}
          style={SongItemStyles.artist}>{`Artist   ${song.artistName}`}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default SongItem;
