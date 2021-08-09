import React, { Component } from "react";
import {View,Text,TouchableOpacity, StyleSheet} from "react-native"

export default class Filter extends Component {
    render(){
        return(
             <View style={styles.container}>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>
                            Show All
                        </Text>
                    </TouchableOpacity>
                       <TouchableOpacity>
                        <Text style={styles.buttonText}>
                            Memoried
                        </Text>
                    </TouchableOpacity>
                       <TouchableOpacity>
                        <Text style={styles.buttonText}>
                            Need Practice
                        </Text>
                    </TouchableOpacity>
                </View>
        )
    }
}

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