import React, {Component} from 'react';
import {
    View,
    Button,

} from 'react-native';
import {WebView} from 'react-native-webview';

class User extends Component {

    render() {
        return (
            <WebView source={{ uri: 'https://github.com/react-native-community/react-native-webview/blob/master/docs/Getting-Started.md' }} />
        );
    }
}

export default User;

