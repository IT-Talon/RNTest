import React, {Component} from 'react';
import {Text} from 'react-native';

export default class HelloText extends Component {
    render() {
        return (
            <Text onPress={
                () =>console.log("talon")
            } style={{fontSize: 20}}> Hello {this.props.name}! </Text>
        );
    }

}
