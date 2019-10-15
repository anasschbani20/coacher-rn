import React from 'react';
import { Navigation } from 'react-native-navigation';
import { observer } from 'mobx-react'
import Provider from '../utils/Provider'
import stores from '../stores';

//Route Imports
import AuthScreen from './AuthScreen/AuthScreen';
import HomeScreen from './HomeScreen/HomeScreen';
import ListFormationsScreen from './ListFormationsScreen/ListFormationsScreen';
import ProfileScreen from './ProfileScreen/ProfileScreen';
import InitializingScreen from "./InitializingScreen/InitializingScreen";

export default routes = {
   'App.Initializing': InitializingScreen,
   'App.Login': AuthScreen,
   'App.Home': HomeScreen,
   'App.ListFormations': ListFormationsScreen,
   'App.Profile': ProfileScreen,
}

// Register all screens of the app (including internal ones)
export function registerScreens() {
  for (let r in routes) {
    Navigation.registerComponent(r, () => sceneCreator(routes[r], stores))
  }
}
  

function sceneCreator(sceneComp, store) {
 
  @observer class SceneWrapper extends React.Component {
    static options(passProps) {
      return sceneComp.options ? sceneComp.options(passProps) : {}
    }

    render() {
      return (
        <Provider store={store}>
          {React.createElement(sceneComp, this.props)}
        </Provider>
      )
    }
  }
  return SceneWrapper
}
