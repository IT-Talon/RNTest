import React, {Component} from 'react';
import {
    View,
    Button,

} from 'react-native';

class User extends Component {

    render() {
        return (
            <View>
                <Button
                    onPress={
                        () => {
                            console.log('uuuu');
                            this.props.navigation.navigate('Details', {aa: 'User过来的'});
                        }
                    }
                    title="下一步"
                />
            </View>
        );
    }
}

export default User;

