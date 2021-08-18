import React, { Component } from "react";
import {View,Text,TouchableOpacity, StyleSheet} from "react-native";
import {connect} from 'react-redux';
import {
  showAll,
  showMemorized,
  showNeedPractice,
} from "./Redux/reducer/actionCreators";

 class Filter extends Component {
        getTextStyle(statusName) {
        const {myFilterStatus} = this.props;
        if(statusName === myFilterStatus) return {color:'red', fontWeight:'bold',}
        return styles.buttonText;
    }
    setFilterStatus(actionType){
        this.props.dispatch({type: actionType})
        /* khi dispatch được gọi các action trong hàm reducer sẽ được chạy và từ đáy nó sẽ xác định 
        các action cần thay đổi bằng các tham số truyền vào và set cho thuộc tính type của action 
        bằng các tham sô truyền vào
        */
    }
render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.showAll()}>
          <Text style={this.getTextStyle("SHOW_ALL")}>Show All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.showMemorized()}>
          <Text style={this.getTextStyle("MEMORIED")}>Memoried</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.showNeedPractice()}>
          <Text style={this.getTextStyle("NEED_PRACTICE")}>Need Practice</Text>
        </TouchableOpacity>
      </View>
    );
}
}

function mapStateProps(state) {
    return {
        myFilterStatus:state.filterStatus
    }
}

export default connect(
  mapStateProps,
  { showAll, showMemorized, showNeedPractice }
)(Filter);

const styles = StyleSheet.create({
container: {
    backgroundColor:'green',
flex:1, 
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
buttonText: {
    color:'white',
    padding:10
}
})

