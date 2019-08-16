import React from 'react';
import {Text, View, Image} from 'react-native';
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeIconWithBadge from './HomeIconWithBadge';
import {Home} from '../main/Mains';
import HomeScreen from './HomeScreen';
import User from '../main/User';
import DetailsScreen from './DetailsScreen';
import Third from '../main/Third';
import App from '../../App';
import AuthenticationScreen from './AuthenticationScreen';

const AppNavigator = createSwitchNavigator({
    Auth: AuthenticationScreen, // This screen renders a navigator!
    Details: DetailsScreen,
    Third: Third,
});


// export default createAppContainer(createBottomTabNavigator(
//     {
//         Home: HomeStack,
//         User: UserStack,
//     },
//     {
//         defaultNavigationOptions: ({navigation}) => ({
//
//             tabBarIcon: ({focused, horizontal, tintColor}) => {
//                 const {routeName} = navigation.state;
//                 let IconComponent = Ionicons;
//                 let iconName;
//                 let imgSrc;
//                 if (routeName === 'Home') {
//                     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//                     // Sometimes we want to add badges to some icons.
//                     // You can check the implementation below.
//                     IconComponent = HomeIconWithBadge;
//                     imgSrc = focused ? require('../../img/icon_home_selected.png') : require('../../img/icon_home_normal.png');
//                 } else if (routeName === 'User') {
//                     iconName = `ios-options`;
//                     imgSrc = focused ? require('../../img/icon_mine_selected.png') : require('../../img/icon_mine_normal.png');
//                 }
//
//                 // You can return any component that you like here!
//                 // return <IconComponent name={iconName} size={25} color={tintColor}/>;
//                 return <Image source={imgSrc}/>;
//             },
//         }),
//         tabBarOptions: {
//             activeTintColor: 'tomato',
//             inactiveTintColor: 'gray',
//         },
//
//     },
// ));

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
// const TabNavigator = createBottomTabNavigator({
//         Home: HomeScreen,
//         User: User,
//     },
//     {
//         defaultNavigationOptions: ({navigation}) => ({
//
//             tabBarIcon: ({focused, horizontal, tintColor}) => {
//                 const {routeName} = navigation.state;
//                 let IconComponent = Ionicons;
//                 let iconName;
//                 let imgSrc;
//                 if (routeName === 'Home') {
//                     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//                     // Sometimes we want to add badges to some icons.
//                     // You can check the implementation below.
//                     IconComponent = HomeIconWithBadge;
//                     imgSrc = focused ? require('../../img/icon_home_selected.png') : require('../../img/icon_home_normal.png');
//                 } else if (routeName === 'User') {
//                     iconName = `ios-options`;
//                     imgSrc = focused ? require('../../img/icon_mine_selected.png') : require('../../img/icon_mine_normal.png');
//                 }
//
//                 // You can return any component that you like here!
//                 // return <IconComponent name={iconName} size={25} color={tintColor}/>;
//                 return <Image source={imgSrc}/>;
//             },
//         }),
//         tabBarOptions: {
//             activeTintColor: 'tomato',
//             inactiveTintColor: 'gray',
//         },
//
//     },
// );
// export default createAppContainer(TabNavigator);
//
//
// export const BottomContainer = createAppContainer(TabNavigator);
