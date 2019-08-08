import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window');
const loading = require('./img/loading.gif');

const styles = {
    wrapper: {},

    slide: {

        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        width,
        flex: 1,
        backgroundColor: 'transparent',
    },

    loadingView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.5)',
    },

    loadingImage: {
        width: 60,
        height: 60,
    },
};
const titleList = [
    '111111111111111111',
    '2222222222222222222',
    '333333333333333333333333',
    '4444444444444444444444',
];
const Slide = props => {
    return (<View style={styles.slide}>
        <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}}/>
        {
            !props.loaded && <View style={styles.loadingView}>
                <Image style={styles.loadingImage} source={loading}/>
            </View>
        }
    </View>);
};

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: [
                'http://www.qq745.com/uploads/allimg/141106/1-141106153Q5.png',
                'https://www.qq745.com/uploads/allimg/170626/14-1F626110034.png',
                'https://www.qq745.com/uploads/allimg/170626/14-1F626110038-52.png',
                'https://www.qq745.com/uploads/allimg/170626/14-1F626110038-53.png',
            ],

            loadQueue: [0, 1, 2, 3],
            title: titleList[0],
        };
        this.loadHandle = this.loadHandle.bind(this);
    }

    loadHandle(i) {
        let loadQueue = this.state.loadQueue;
        loadQueue[i] = 1;
        this.setState({
            loadQueue,
        });
    }

    render() {
        return (
            <View style={{height: 300}}>
                <Swiper loadMinimal loadMinimalSize={2} style={styles.wrapper} loop={false} autoplay={true}
                        onIndexChanged={(index) => {
                            this.setState({
                                title: titleList[index],
                            });
                        }}
                >
                    {
                        this.state.imgList.map((item, i) =>
                            <Slide
                                loadHandle={this.loadHandle}
                                loaded={!!this.state.loadQueue[i]}
                                uri={item}
                                i={i}
                                key={i}/>)
                    }
                </Swiper>
                <View>
                    <Text>Current Loaded Images: {this.state.title}</Text>
                </View>
            </View>
        );
    }
}
