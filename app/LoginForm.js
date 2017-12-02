//import needed libraries
import React , { Component } from 'react';
import { Text ,View, StyleSheet } from 'react-native';


//create  Component
class LoginForm extends Component{

  constructor(){
    super();
    this.state = {
      title:'Title from state'
    }
  }

  render(){
    return (
      <View style={styles.header}>
        <Text style={styles.text}>
          Login Page
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   header:{
     backgroundColor: 'grey',
     height:80,
     alignItems :'center',//Horiz Alignment
     justifyContent : 'center'//Vertical alignments
   },
   text:{
     fontSize: 15,
     fontWeight:'bold'
   }
});
//export componenet with other app componenet
export default LoginForm ;
