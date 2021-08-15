import React, { Component } from 'react';
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

 class Header extends Component{
    toggleisAdding(){
        this.props.dispatch({
            type:'TOGGLE_IS_ADDING'
        })
    }
    render(){
        return(
            <View style={styles.header}>
                    <Text/>
                    <Text>
                        My word
                    </Text>
                    <TouchableOpacity onPress={()=>this.toggleisAdding()}>
                    <Text>+</Text>
                    </TouchableOpacity>
            </View> 
        )
    }
}
export default connect()(Header)

const styles= StyleSheet.create({
    header: {
        flex:1,
        backgroundColor:'#D9D9D9',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:20 
    }
});