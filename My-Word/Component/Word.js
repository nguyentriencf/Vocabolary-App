import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";

export default class Word extends Component {
    render() {
        const {id, en, vn, memorized} = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        return(
            <View  style={Styles.container}>
                <Text key={id} style={{textDecorationLine}}>
                    {en} : {vn}
                </Text>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        padding:10,
        margin:10
    }
})