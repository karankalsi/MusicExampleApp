import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import colors from '../commons/colors';
import fonts from '../commons/fonts';
import SongDetail from './SongDetail';
import SongsList from './SongsList';

const screens = {
  SongsList: SongsList,
  SongDetail: SongDetail,
};

export type AppScreen = keyof typeof screens;

export const registerScreens = (): void => {
  Object.keys(screens).map(key =>
    Navigation.registerComponent(key, () => screens[key as AppScreen]),
  );
};

export const screenName = (screen: AppScreen): string => {
    return screen as string;
}

export const setDefaultOptions = (): void =>
  Navigation.setDefaultOptions({
    window: {
      backgroundColor: colors.primary,
    },
    statusBar: {
      backgroundColor: colors.primaryDark,
      style: 'dark'
    },
    topBar: {
      background: {
        color: colors.primaryDark,
      },
      backButton: {
        color: colors.accent,
        showTitle: false
      },
      title: {
        ...fonts.title as {}
      }
    },
    layout: {
      componentBackgroundColor: colors.primary,
      orientation: ['portrait'],
      direction: 'locale',
    },
    modalPresentationStyle: OptionsModalPresentationStyle.fullScreen,
  });

export default screens;
