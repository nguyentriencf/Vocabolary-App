import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {connect} from 'react-redux'

 class Word extends Component {
    getMimorizedWord(){
       this.props.dispatch({
           type: 'MIMORIZIED',
           id:this.props.myWord.id
       });
   }
    render() {
        const {id, en, vn, memorized} = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        return(
            <View  style={Styles.container}>
                <Text key={id} style={{textDecorationLine}}>
                    {en}
                </Text>
                <Text>
                    {vn}
                </Text>
                <View style={Styles.controller}>
                    <TouchableOpacity 
                    style={Styles.button}
                     onPress={this.getMimorizedWord.bind(this)}>
                        <Text>Memorized</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.button}>
                        <Text>
                            Show
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default connect()(Word)

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
        pading:10,
        margin:10
    }
})