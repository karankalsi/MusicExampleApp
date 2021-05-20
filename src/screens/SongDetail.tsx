import React from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import colors from '../commons/colors';
import styles from '../commons/styles';
import {Song} from '../data/models';
import SongDetailStyles from './styles/SongDetailStyles';

export interface SongDetailProps {
  song?: Song;
}

const SongDetail: NavigationFunctionComponent<SongDetailProps> = props => {
  const {song} = props;
  return (
    <View style={styles.defaultScreenContainer}>
      <Image
        style={SongDetailStyles.artwork}
        resizeMode={'cover'}
        source={{uri: song?.artworkUrl100}}
      />
      <View style={SongDetailStyles.infoContainer}>
        <Text style={SongDetailStyles.title}>{song?.trackName}</Text>
        <Text style={SongDetailStyles.description}>
          {song?.longDescription}
        </Text>
      </View>
    </View>
  );
};

SongDetail.options = {
  topBar: {
    title: {
      color: colors.accent,
      alignment: 'center',
      text: 'Song Detail',
    },
  },
};

export default SongDetail;
