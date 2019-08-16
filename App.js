import React, {Component} from 'react';
import {
    View,
    Button,

} from 'react-native';
import {BottomContainer} from './js/route/RouteConfig';

class App extends Component {

    render() {
        return (

            <BottomContainer />
            // <Button
            //     onPress={
            //         () => {
            //             console.log('uuuu');
            //             this.props.navigation.navigate('Detail', {aa: 'User过来的'});
            //         }
            //     }
            //     title="下一步"
            // />

        );
    }
}

export default App;

