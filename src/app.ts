import SplashScreen from 'react-native-splash-screen';
import Navigation from './lib/navigation';
import screens, {
  registerScreens,
  screenName,
  setDefaultOptions,
} from './screens';

const startApp = async () => {
  SplashScreen.hide();
  registerScreens();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setRoot();
  });
};

const setRoot = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: screenName('SongsList'),
            },
          }
        ],
      },
    },
  });
};

export {startApp};
