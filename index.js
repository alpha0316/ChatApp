/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as ChatApp} from './app.json';
import SplashScreen from 'react-native-splash-screen';
SplashScreen.hide();

AppRegistry.registerComponent(ChatApp, () => App);
