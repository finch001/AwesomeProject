/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Image,
} from 'react-native';

import Header from './jsutils/header';
import List from'./jsutils/list';
import ImportNew from './jsutils/importNew'


var imgs = ['http://www.ituring.com.cn/bookcover/1442.796.jpg',
    'http://www.ituring.com.cn/bookcover/1668.553.jpg',
    'http://www.ituring.com.cn/bookcover/1442.796.jpg'
];

export default class AwesomeProject extends Component {
    render() {

        // <View style={styles.container}>
        //     <View style={[styles.item,styles.center]}>
        //         <Text style={styles.font}>
        //             酒店
        //         </Text>
        //     </View>
        //     <View style={[styles.item,styles.lineLeftRight]}>
        //         <View style={[styles.center,styles.flex,styles.lineCenter]}>
        //             <Text style={styles.font}>
        //                 海外酒店
        //             </Text>
        //         </View>*
        //         <View style={[styles.center,styles.flex]}>
        //             <Text style={styles.font}>
        //                 特惠酒店
        //             </Text>
        //         </View>
        //     </View>
        //
        //     <View style={styles.item}>
        //         <View style={[styles.center,styles.flex,styles.lineCenter]}>
        //             <Text style={styles.font}>
        //                 团购
        //             </Text>
        //         </View>
        //         <View style={[styles.center,styles.flex]}>
        //             <Text style={styles.font}>
        //                 客栈 公寓
        //             </Text>
        //         </View>
        //     </View>
        // </View>


        //1. 网易新闻首页
        return (
            <View style={styles.flex}>
                <Header></Header>
                <List title='Helloworld'></List>
                <List title='Helloworld'></List>
                <List title='Helloworld'></List>
                <List title='Helloworld'></List>
                <List title='Helloworld'></List>

                <ImportNew
                    news={[
                '1.asdasdasdasdasdasd','2.asdasdasdasda','3.汉字的里啊是哒是哒岁数大'
            ]}
                />
            </View>

            //2. 动态加载网络图片
        );
    }
}

var MyImage = React.createClass({
    getInitialState: function () {
        var imgs = this.props.imgs;
        return {
            imgs: imgs,
            count: 0,
        };
    }, goNext: function () {
        var count = this.state.count;
        if (count < imgs.length) {
            this.setState({
                count: count

            });
        }
    }, goPreview: function () {
        var count = this.state.count;
        if (count >= 0) {
            this.setState({
                count: count
            });
        }

    }, render: function () {
        return (
            <View style={[styles.flex]}>
                <View style={styles.image}>
                    <Image style={styles.img} source={{uri: this.state.imgs[this.state.count]}}
                           resizeMode="contain"
                    />
                </View>

                <View style={styles.btns}>
                    <TouchableOpacity onPress={this.goPreview()}>
                        <View style={styles.btn}>
                            <Text>上一张</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={this.goNext()}>
                        <View style={styles.btn}>
                            <Text>下一张</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
});

var app = React.createClass({
    render: function () {
        return (
            <View style={[styles.flex,{marginTop:40}]}>
                <MyImage imgs={imgs}></MyImage>
            </View>
        );
    }
});


// 这边主要是作为样式 放在这里
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        margin: 5,
        borderRadius: 5,
        padding: 2,
        backgroundColor: '#FF0067',
        height: 84,
        borderColor: 'red',
        // 按照横轴让想排布
        flexDirection: 'row',
    },
    font: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    lineLeftRight: {
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderColor: '#fff'
    },
    lineCenter: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#fff'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    item: {
        flex: 1,
        height: 80,
        borderColor: 'white',
        borderWidth: 1
    },
    center: {
        // 水根据父容器的flexDirection的方向来确定
        justifyContent: 'center',
        // 自己内容居中
        alignItems: 'center'
    },
    flex: {
        flex: 1,
    },
    image: {
        borderWidth: 1,
        width: 300,
        height: 200,
        borderRadius: 5,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 150,
        width: 200,
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    btn: {
        width: 60,
        height: 30,
        borderColor: '#0089FF',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginRight: 20
    },
});
// 真正启动的地方在这里
AppRegistry.registerComponent('AwesomeProject', () => app);
