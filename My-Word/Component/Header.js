import React, { Component } from 'react';
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {toggleIsAdding} from './Redux/reducer/actionCreators';

 class Header extends Component{
    render(){
        return(
            <View style={styles.header}>
                    <Text/>
                    <Text>
                        My word
                    </Text>
                    <TouchableOpacity onPress={()=>this.props.toggleIsAdding()}>
                    <Text>+</Text>
                    </TouchableOpacity>
            </View> 
        )
    }
}

// tham số thứ 2 là mapActiontoProps
export default connect(null, {toggleIsAdding})(Header)

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