import React from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeIconWithBadge from './HomeIconWithBadge';
import {Home} from '../main/Mains';

class HomeScreen extends React.Component {
    render() {
        return (
            <Home/>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
        Home: HomeScreen,
        Settings: SettingsScreen,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                let imgSrc;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    IconComponent = HomeIconWithBadge;
                    imgSrc = focused ? require('../../img/icon_home_selected.png') : require('../../img/icon_home_normal.png');
                } else if (routeName === 'Settings') {
                    iconName = `ios-options`;
                    imgSrc = focused ? require('../../img/icon_mine_selected.png') : require('../../img/icon_mine_normal.png');
                }

                // You can return any component that you like here!
                // return <IconComponent name={iconName} size={25} color={tintColor}/>;
                return <Image source={imgSrc}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    },
);



export default createAppContainer(TabNavigator);
