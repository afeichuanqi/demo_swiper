/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class PageTwo extends Component<Props> {


    render() {

        return (
            <View style={styles.container}>
                <Text>PageTwo</Text>
            </View>
        );
    }
}
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

