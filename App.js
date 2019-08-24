/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createMaterialTopTabNavigator} from "react-navigation";
import PageOne from './js/PageOne';
import PageTwo from './js/PageTwo';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    tabs = {
        PageOne: {
            screen: PageOne,
            navigationOptions: {
                title:'page1'
            }
        },
        PageTwo: {
            screen: PageTwo,
            navigationOptions: {
                title:'page2'
            }
        },
    }

    render() {
        const TabNavigator =createAppContainer(createMaterialTopTabNavigator(
            this.tabs, {
                tabBarOptions: {
                    tabStyle: styles.tabStyle,
                    upperCaseLabel: false,//是否使标签大写，默认为true
                    scrollEnabled: true,//是否支持 选项卡滚动，默认false
                    style: {
                        backgroundColor: 'blue',//TabBar 的背景颜色
                        height: 30//fix 开启scrollEnabled后再Android上初次加载时闪烁问题
                    },
                    indicatorStyle: styles.indicatorStyle,//标签指示器的样式
                    labelStyle: styles.labelStyle,//文字的样式
                    rightWidth: 55,
                },
                lazy: true
            }
        ))
        return (
            <View style={styles.container}>
               <TabNavigator/>
            </View>
        );
    }
}
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        marginTop:40,
        flex: 1,

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    tabStyle: {
        padding: 0,
        width:width/2

    },
    indicatorStyle: {
        height: 6,
        borderRadius: 20,
        backgroundColor: 'rgb(243,234,15)'
    },
    labelStyle: {
        fontSize: 18,
        margin: 0,
    },
    indicatorContainer: {
        alignItems: "center"
    },
    indicator: {
        color: 'red',
        // width:10,
        // margin: 5,
        maxWidth: 10
    }
});

