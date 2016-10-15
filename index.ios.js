/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class Wayfarer extends Component {
  state = {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
    };


  render() {
    return (
          <View style={styles.container}>

            <Switch
              onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
              style={{width:80,marginBottom:30}}
              value={this.state.falseSwitchIsOn} />

           <Text  style = {styles.button}> Student Mode </Text>

           <TextInput style={styles.searchBar} placeholder= "Search"/>

           <TextInput style={styles.searchBar} placeholder= "Search"/>

           <TouchableHighlight  style = {styles.button}>
              <Text style = {styles.buttonText}> Button 1</Text>
           </TouchableHighlight>

           </View>

        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:50
  },
  button: {
   borderWidth: 1,
   marginBottom:30,
   height:40,
   width:300,
   justifyContent: 'center',
   alignItems: 'center'
  },
  searchBar: {
     marginBottom:30,
     marginLeft:40,
     height:40,
     width:250,
     borderColor: '#E4E4E4',

},
  buttonText:{
    textAlign: 'center',
    color: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Wayfarer', () => Wayfarer);
