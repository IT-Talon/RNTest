import React from 'react';
import Home from './Home';
import {withNavigation} from 'react-navigation';
import {Button, ScrollView} from 'react-native';

class HomeScreen extends React.Component {
    render() {
        const {navigation} = this.props;
        let param = {
            fartherProps: this.props.navigation,
        };
        return (
            <Button style={{width: 200}} title="下一步"
                    onPress={() => {
                        console.log('ss');
                        // this.props.param.fartherProps.navigate('Detail', {aa: 'Home过来的'});
                        navigation.navigate('Third', {aa: 'Home过来的'});
                    }}
                    color="#841584"/>
            // <Home param={param}/>
        );
    }
}

export default withNavigation(HomeScreen);
