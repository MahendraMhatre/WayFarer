import React, { Component,PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

export default class Second extends Component {

  static propTypes = {
    getBack: PropTypes.func.isRequired,
  }
  render() {
    return (
      <View >
           <Text> Student Mode 1232132</Text>
           <TouchableHighlight  onPress={this.props.getBack} style = {styles.button}>
              <Text style = {styles.buttonText}> Button 2</Text>
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
    backgroundColor: '#FFF952',
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
     borderColor: '#E4E4E4'

},
  buttonText:{
    textAlign: 'center',
    color: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
