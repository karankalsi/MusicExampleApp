import {StyleSheet} from 'react-native';
import colors from '../../commons/colors';
import fonts from '../../commons/fonts';

export default StyleSheet.create({
  songsList: {width: '100%', paddingTop: 12},
  loader: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderText: {...fonts.meta, color: colors.primaryDark, marginTop: 10},
});
