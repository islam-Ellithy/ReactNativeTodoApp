//import needed libraries
import React , { Component } from 'react';
import { Text ,View, StyleSheet } from 'react-native';
import Button from './common/Button';

//create  Component
class Home extends Component{

  constructor(){
    super();
    this.state = {
      title:'Header App'
    }
  }


  _onLoginPressed(){
    this.props.navigation.navigate('Login');
  }

  render(){
    return (
      <View>
         <Button
          onPress={this._onLoginPressed.bind(this)}>
          Login
         </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   header:{
     backgroundColor: 'gray',
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
export default Home;
