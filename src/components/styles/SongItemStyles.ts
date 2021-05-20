import {StyleSheet} from 'react-native';
import colors from '../../commons/colors';
import fonts from '../../commons/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.separator,
    paddingVertical: 12,
  },
  artwork: {width: 60, height: 60, marginHorizontal: 10},
  infoContainer: {flex: 1, flexDirection: 'column'},
  title: {...fonts.metaBold, color: colors.primaryText},
  artist: {...fonts.meta, color: colors.primaryText, marginTop: 8},
});
