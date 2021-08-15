import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {connect} from 'react-redux'

 class Word extends Component {
    getMemorizedWord(){
       this.props.dispatch({
           type: 'TOGGLE_MEMORIZIED',
           id:this.props.myWord.id
       });
   };
    toggleShowVn(){
        this.props.dispatch({
            type:'TOGGLE_SHOW',
            id:this.props.myWord.id
        })
    }

    render() {
        const {id, en, vn, memorized,isShow} = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const memorizedButtonText = memorized ? 'forget' : 'memorized'
        const toggleShowButtonText = isShow ? 'hide' : 'show'
        return(
            
            <View  style={Styles.container}>
                <Text key={id} style={{textDecorationLine}}>
                    {en}
                </Text>
               {isShow? <Text>
                    {vn}
                </Text> :null} 
                <View style={Styles.controller}>
                    <TouchableOpacity 
                    style={Styles.button}
                     onPress={this.getMemorizedWord.bind(this)}>
                        <Text>{memorizedButtonText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={Styles.button}
                    onPress={this.toggleShowVn.bind(this)}>
                        <Text>
                          {toggleShowButtonText}
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
        padding:10,
        margin:10
    }
})