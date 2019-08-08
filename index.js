/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Mains from './js/main/Mains';
import container from './js/main/User';
import routeConfig from './js/route/RouteConfig';


AppRegistry.registerComponent(appName, () => routeConfig);
