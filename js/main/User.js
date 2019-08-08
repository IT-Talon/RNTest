import React, {Component} from 'react';
import {
    Text,
    View,
    Button,

} from 'react-native';
import {NavigationScreenProp as goBack} from 'react-navigation';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Details from './Details';
import Mains, {Home} from './Mains';


class User extends Component {

    render() {
        return (
            <View>
                <Button
                    onPress={() => this.props.navigation.navigate('MainsScreen')}
                    title="下一步"
                />
            </View>
        );
    }
}

export default User;

// const AppNavigator = createStackNavigator({
//     UserScreen: {
//         screen: User,
//     },
//     MainsScreen: Mains,
//     DetailsScreen: Details,
// });
// const container = createAppContainer(AppNavigator);
//
// export default container;

