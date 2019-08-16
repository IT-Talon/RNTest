import React, {Component} from 'react';
import {
    View,
    Button,

} from 'react-native';

export default class Third extends Component {

    render() {
        return (
            <View>
                <Button
                    onPress={
                        () => {
                            console.log('uuuu');
                            this.props.navigation.goBack();
                        }
                    }
                    title="上一步"
                />
            </View>
        );
    }
}



