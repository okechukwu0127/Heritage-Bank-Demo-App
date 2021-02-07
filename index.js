/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import AppNew from './src/AppNew'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNew);
