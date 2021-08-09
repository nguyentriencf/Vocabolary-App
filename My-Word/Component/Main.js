import React, { Component } from "react";
import { Text, View, FlatList, TouchableOpacity, Touchable } from 'react-native';
import {connect} from "react-redux";
import Word from "./Word";
import Filter from "./Filter";
 class Main extends Component {
    render(){
        return(

            <View style={{backgroundColor:'yellow', flex:1,alignSelf:'stretch', justifyContent:'center'}}>
                <View style={{flex:10}}>
                     <FlatList data={this.props.myWords}
                renderItem={({item})=><Word myWord={item}/>}
                keyExtractor={item => item.id}/>
                </View>
                <Filter/>

            </View>
        )
    }
}

// state này là store 
function mapStateToProp(state) {
    // return lúc này sẽ là một js obj
    return {
        myFilter: state.filterStatus,
        myWords: state.arrWords
    }
}
// Từ đây Component Main sẽ có thêm một thuôc tính myFilter chúng ta có thể truy cập được bằng cách => this.prop.myFilter

// tham số trong hàm connect sẽ lấy state cần dung trong store
export default connect(mapStateToProp)(Main)