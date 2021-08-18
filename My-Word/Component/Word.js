import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {connect} from 'react-redux';
import { toggleMemorized, toggleShow } from "./Redux/reducer/actionCreators";

 class Word extends Component {
    render() {
        const {id, en, vn, memorized,isShow} = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const memorizedButtonText = memorized ? 'forget' : 'memorized';
        const toggleShowButtonText = isShow ? 'hide' : 'show';
        const vnText = isShow?vn:'------';
        return (
          <View key={id} style={Styles.container}>
            <Text style={{ textDecorationLine }}>{en}</Text>
            <Text>{vnText}</Text>
            <View style={Styles.controller}>
              <TouchableOpacity
                style={Styles.button}
                onPress={() => this.props.toggleMemorized(id)}
              >
                <Text>{memorizedButtonText}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.button}
                onPress={() => this.props.toggleShow(id)}
              >
                <Text>{toggleShowButtonText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
}

export default connect(null, { toggleMemorized, toggleShow })(Word);

const Styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        padding:10,
        margin:10
    },
    controller: {
        flexDirection:'row',
        justifyContent:'space-around'
    },
    button: {
        backgroundColor:'pink',
        padding:10,
        margin:10
    }
})