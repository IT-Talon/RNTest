import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import {View, Text, Button} from 'react-native';
import React from 'react';

export default class DetailsScreen extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Details!</Text>
                <Button
                    onPress={
                        () => {
                            console.log('uuuu');
                            navigation.navigate('Third', {aa: 'User过来的'});
                            // this.props.navigation.goBack();
                        }
                    }
                    title="下一步"
                />
            </View>
        );
    }
}



