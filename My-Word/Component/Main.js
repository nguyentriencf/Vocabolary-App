import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import {connect} from "react-redux";
import Word from "./Word";
import Filter from "./Filter";
import Header from "./Header";
import Form from "./Form";
 class Main extends Component {
      getWordList(){ 
          const{myFilter, myWords} = this.props;
          if(myFilter ==='MEMORIED') return myWords.filter(e => e.memorized)
          if(myFilter ==='NEED_PRACTICE') return myWords.filter(e => !e.memorized)
          return myWords;        
    }
    render(){
        return(
            <View style={{backgroundColor:'yellow', flex:1,alignSelf:'stretch', justifyContent:'center'}}>
                <Header/>
                <View style={{flex:10}}>
                    {this.props.myIsAdding? <Form/>:null}
                     <FlatList data={this.getWordList()}
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
        myWords: state.arrWords,
        myIsAdding: state.isAdding
    }
}
// Từ đây Component Main sẽ có thêm một thuôc tính myFilter chúng ta có thể truy cập được bằng cách => this.prop.myFilter

// tham số trong hàm connect sẽ lấy state cần dung trong store
export default connect(mapStateToProp)(Main)

