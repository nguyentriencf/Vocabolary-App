import React, { Component } from "react";
import {View,Text,TouchableOpacity, StyleSheet} from "react-native"
import {connect} from 'react-redux'

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
    return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> this.setFilterStatus('FILTER_SHOW_ALL')}>
                    <Text style={this.getTextStyle('SHOW_ALL')}>
                        Show All
                    </Text>
                </TouchableOpacity >
                    <TouchableOpacity onPress={()=> this.setFilterStatus('FILTER_MEMORIED')}>
                    <Text style={this.getTextStyle('MEMORIED')}>
                        Memoried
                    </Text>
                </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.setFilterStatus('FILTER_NEED_PRACTICE')}>
                    <Text style={this.getTextStyle('NEED_PRACTICE')}>
                        Need Practice
                    </Text>
                </TouchableOpacity>
            </View>
    )
}
}

function mapStateProps(state) {
    return {
        myFilterStatus:state.filterStatus
    }
}

export default connect(mapStateProps)(Filter)

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

