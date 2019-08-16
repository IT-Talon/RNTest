import {
    Text,
    View,
    Image,
    Button,
    TextInput,
    ScrollView, StyleSheet,
} from 'react-native';
import Banner from '../Home/Banner';
import {withNavigation} from 'react-navigation';
import React from 'react';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit_text: 'Useless Multiline Placeholder',
        };
    }

    render() {
        return (
            <View style={styles.home}>
                <ScrollView style={{flex: 1}}>
                    <Banner/>
                    <View style={styles.home_text}>
                        <Text style={{fontSize: 20, color: 'blue', fontWeight: 'bold'}}>
                            TextView
                        </Text>
                    </View>
                    <Image style={{marginTop: 20, alignSelf: 'center', width: 80, height: 80}}
                           source={require('../../img/icon.jpg')}/>
                    <Text style={{alignSelf: 'center', fontSize: 16, color: 'blue', fontWeight: 'bold'}}>
                        {this.state.text1}
                    </Text>
                    <TextInput
                        keyboardType='numeric'
                        placeholder="密码"
                        secureTextEntry={false}//隐藏输入内容
                        underlineColorAndroid={'transparent'}
                        onChangeText={text1 => {
                            this.setState({text1});
                        }}/>
                    <Button style={{width: 200}} title="下一步"
                            onPress={() => {
                                console.log('ss');
                                this.props.param.fartherProps.navigate('Detail', {aa: 'Home过来的'});
                                // this.props.param('Detail');
                            }}
                            color="#841584"/>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    home: {
        flex: 1,
    },
    home_text: {
        backgroundColor: '#FFE9A0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container_key: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        backgroundColor: 'red',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    image: {
        width: 20,
        height: 20,
    },
});

// export default withNavigation(Home);
