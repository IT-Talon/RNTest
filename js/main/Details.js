import React, {Component} from 'react';
import {
    Button,
    Text,
    View,

} from 'react-native';
import {WebView} from 'react-native-webview';

export default class Details extends Component {

    render() {
        let {aa} = typeof (this.props.navigation.state.params) == 'undefined' ? ({aa: 'Button'}) : (this.props.navigation.state.params);
        let {bb} = typeof (this.props.navigation.state.params) == 'undefined' ? ({bb: ''}) : (this.props.navigation.state.params);
        // let {aa} = this.props.navigation.state.params
        return (
            <View>
                <Text>{bb.item.desc}</Text>

                <WebView
                    style={{marginTop: 20}}
                    source={{uri: bb.item.link}}
                />
                <Button onPress={() => {
                    this.props.navigation.goBack();
                }} title={aa}/>
            </View>
        );
    }
}

