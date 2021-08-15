import React, { Component } from "react";
import {View,Text,TextInput,StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
 class Form extends Component{
    constructor(props) {
        super(props)
        this.state={
            en:'',
            vn:''}
            this.onAdd = this.onAdd.bind(this)
    }
    onAdd(){
        const {en,vn} = this.state;
        this.props.dispatch({
            type:'ADD_WORD',
            en,
            vn
        })
        this.props.dispatch({
            type:'TOGGLE_IS_ADDING'
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                value={this.state.en}
                onChangeText={text=>this.setState({en:text})}
                placeholder="Enlish word"/>
                <TextInput style={styles.textInput}
                value= {this.state.vn}
                  onChangeText={text=>this.setState({vn:text})}
                   placeholder="Meaning"/>
                <TouchableOpacity onPress={this.onAdd}>
                    <Text>Add</Text>
               </TouchableOpacity>
                
            </View>
        )
    }
}

export default connect()(Form)

const styles = StyleSheet.create({
    container:{
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'center'
    },
        textInput:{
            backgroundColor:'#30384B',
            height:40,
            margin:10,
            paddingHorizontal:10,
            color:'white'
        }
})