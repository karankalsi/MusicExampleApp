import {StyleSheet} from 'react-native';
import colors from '../../commons/colors';
import fonts from '../../commons/fonts';

export default StyleSheet.create({
  artwork: {
    width: '100%',
    height: '30%',
    backgroundColor: 'red',
  },
  infoContainer: {
    flex: 1,
    margin: 12,
  },
  title: {
    ...fonts.h1,
    color: colors.primaryText,
    margin: 12,
  },
  description: {
    ...fonts.paragraph,
    color: colors.primaryText,
  },
});
