import React from 'react';
import Home from './Home';
import {withNavigation} from 'react-navigation';
import {Button, ScrollView, View} from 'react-native';
import {WebView} from 'react-native-webview';

class HomeScreen extends React.Component {
    render() {
        const {navigation} = this.props;
        let param = {
            fartherProps: this.props.navigation,
        };
        return (

            <WebView
                style={{marginTop: 20}}
                source={{uri: 'https://www.baidu.com/'}}
            />
        );
    }
}

export default withNavigation(HomeScreen);
