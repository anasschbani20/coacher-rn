import { Navigation } from 'react-native-navigation';
import Theme from './styles/theme'
import images from './assets/images'
console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted(...) is deprecated'];
// import Icon from 'react-native-vector-icons/FontAwesome5';

export default class App {
  constructor() {
    Navigation.events().registerAppLaunchedListener(async () => {
      Navigation.setDefaultOptions({
        _statusBar: {
          backgroundColor: 'transparent',
          style: 'dark',
          drawBehind: true,
        },
        topBar: {
          background: {
            color: Theme.mainColor,
          },
          backButton: {
            color: Theme.linkColor,
            showTitle: false
          },
        }
      });
      Navigation.setRoot({
        root: {
          stack: {
            id: 'Initializing',
            children: [
              {
                component: {
                  name: 'App.Initializing'
                }
              }
            ]
          }
        }
      });
    });
  }
}

export const goLogin = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'LOGIN',
      children: [
        {
          component: {
            name: 'App.Login',
          }
        }
      ]
    }
  }
});

export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'App.Home',
          }
        }
      ],
    }
  }
});

export const goProfile = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'App.Profile',
            options: {
              _statusBar: {
                backgroundColor: 'transparent',
                style: 'dark',
                drawBehind: true,
              },
              topBar: {
                title: {
                  text: 'Profile & Paramètres',
                  color: '#fff'
                },
                drawBehind: true,
                visible: true,
                animate: true,
              }
            }
          }
        }
      ],
    }
  }
});

