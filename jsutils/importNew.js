/**
 * Created by finch on 17/2/24.
 */
import React, {Component} from 'react'

import{
    StyleSheet,
    Text,
    View,
} from 'react-native'

var importNew = React.createClass({
    show: function (title) {
        alert(title);
    },
    render: function () {
        var news = [];

        for (var i in this.props.news) {
            var text = (
                <Text
                    style={styles.news_item}
                    onPress={this.show.bind(this,this.props.news[i])}
                    numberOfLines={2}>
                    {this.props.news[i]}
                </Text>
            );
            news.push(text);
        }

        return (
            <View style={styles.flex}>
                <Text style={styles.news_title}>今日头条</Text>
                {news}
            </View>
        )
    }
});


const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    list_item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list_item_font: {
        fontSize: 16
    },
    news_title: {
        height: 40,
        fontWeight: 'bold',
        color: '#CD1D1C',
        borderBottomColor: '#ddd',
        marginLeft: 10,
        marginTop: 15
    },
    news_item: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        lineHeight: 20
    }
});

module.exports = importNew;