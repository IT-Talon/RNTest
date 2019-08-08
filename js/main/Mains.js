import {
    Dimensions,
    Text,
    View,
    StyleSheet,
    Image,
    Button,
    TextInput,
    ScrollView, FlatList, BackHandler, ToastAndroid, TouchableHighlight, ActivityIndicator,
} from 'react-native';
import React, {Component} from 'react';
import Banner from '../Home/Banner';

const deviceW = Dimensions.get('window').width;

const basePx = 375;

function px2dp(px) {
    return px * deviceW / basePx;
}


export class Home extends Component {
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
                                this.props.param.fartherProps.navigate('DetailsScreen', {aa: 'Home过来的'});
                            }}
                            color="#841584"/>
                </ScrollView>
            </View>
        );
    }

}


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            // 下拉刷新
            isRefresh: false,
            // 加载更多
            isLoadMore: false,
            // 控制foot  1：正在加载   2 ：无更多数据
            showFoot: 1,
        };

    }

    /**
     * 获取360 下载列表
     * @private
     */
    _getHotList() {
        this.state.isLoadMore = true;
        fetch('https://www.wanandroid.com/project/list/' + this.page + '/json?cid=294')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (this.page === 1) {
                    console.log('重新加载');
                    this.setState({
                        isLoadMore: false,
                        dataSource: responseJson.data.datas,
                        showFoot: 1,
                    });
                } else {
                    console.log('加载更多');
                    this.setState({
                        isLoadMore: false,
                        // 数据源刷新 add
                        dataSource: this.state.dataSource.concat(responseJson.data.datas),
                    });
                    if (this.page <= 3) {
                        this.setState({
                            showFoot: 1,
                        });
                    } else if (this.page > 3) {
                        this.setState({
                            showFoot: 2,
                        });
                    }
                }


            })
            .catch((error) => {
                console.error(error);
            });
    }

    _onRefresh() {
        // 不处于 下拉刷新
        if (!this.state.isRefresh) {
            this.page = 1;
            this._getHotList();
        }
    }

    _onLoadMore() {
// 不处于正在加载更多 && 有下拉刷新过，因为没数据的时候 会触发加载
        if (!this.state.isLoadMore && this.state.dataSource.length > 0 && this.state.showFoot !== 2) {
            this.page = this.page + 1;
            this._getHotList();
        }
    }

    _listEmptyComponent() {
        return (
            <View style={{flex: 1, marginTop: 250}}>
                < Text style={{}}> 暂无列表数据，下啦刷新</Text>
            </View>
        );
    }

    _listHeaderComponent() {
        return (

            this.state.dataSource.length > 0 ?
                <View>
                    <Text style={{height: 50}} onPress={() => {
                        this.setState({
                            dataSource: [],
                        });
                    }}>我是头部header,点我清空数据</Text>
                </View> : null
        );

    }

    _listFooterComponent() {
        return (
            this.state.dataSource.length > 0 ?
                <View>
                    {this.state.showFoot === 1 && <ActivityIndicator/>}
                    <Text style={{color: 'red'}}>
                        {this.state.showFoot === 1 ? '正在加载更多数据...' : '没有更多数据了'}
                    </Text>

                </View> : null
        );

    }

    _renderItem(item) {
        return (
            <TouchableHighlight
                style={{backgroundColor: 'yellow', marginTop: 20}}
                activeOpacity={0.5}  //触摸激活时的不透明度
                onHindUnderlay={() => {
                }}  //底层颜色被隐藏时调用
                onShowUnderlay={() => {
                }}  //底层颜色显示的时候调用
                underlayColor={'red'}     //触摸操作底层的颜色
                onPress={() => {
                    this.props.param.fartherProps.navigate('DetailsScreen', {
                        aa: 'Profile过来的 index:' + item.index,
                        bb: item,
                    });
                }}>
                <View>
                    <Text style={{textAlign: 'center'}}>{item.item.title}</Text>

                </View>
            </TouchableHighlight>
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ref='flatList'  // this.refs.flatList 获取到该组件
                    data={this.state.dataSource} // 列表的数据源, 数组
                    // extraData={this.state} //引用类型，数据可能不会更新，只是复制，没有操作引用的对象
                    ListHeaderComponent={() => this._listHeaderComponent()}//渲染头部组件
                    ListEmptyComponent={() => this._listEmptyComponent()} //列表为空时渲染
                    // initialNumToRender={6} //首屏渲染的数据量，不会在滑动中被卸载
                    renderItem={(item) => this._renderItem(item)} //渲染列表数据
                    keyExtractor={(item, index) => index + item} //每行不一样的key
                    ItemSeparaterComponent={() => <View style={{height: 6}}/>}//行分隔线，首行前和尾行后无分隔
                    // columnWrapperStyle={{borderWidth: 2}}  //行数>1时，可额外设置行样式
                    showsVerticalScrollIndicator={false} //继承ScrollView的属性，显示水平指示器默认是true
                    horizontal={false} //默认true是垂直布局
                    numColumns={1}
                    // numColumns={2}  // 水平布局的item数量
                    ListFooterComponent={() => this._listFooterComponent()} //渲染底部组件
                    refreshing={this.state.isRefresh} // 等待加载出现加载的符号
                    onRefresh={() => this._onRefresh()} //下拉刷新

                    //加载更多
                    onEndReached={() => this._onLoadMore()}
                    onEndReachedThreshold={0.1}

                />
            </View>
        );
    }
}

let firstClick = 0;
export default class Mains extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
        this.handleBack = this.handleBack.bind(this);
    }

    render() {
        // const {navigate} = this.props.navigation;
        let param = {
            fartherProps: this.props.navigation,
        };
        return (
            <Home param={param}/>
        );
    }


    handleBack = () => {
        let timestamp = (new Date()).valueOf();
        if (timestamp - firstClick > 1000) {
            firstClick = timestamp;
            return false;
        } else {
            ToastAndroid.show('退出程序', ToastAndroid.SHORT);
            BackHandler.exitApp();
            return true;
        }
    };

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
