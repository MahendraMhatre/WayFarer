import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  TouchableHighlight,
  Navigator,
  Image
} from 'react-native';

export default class First extends Component {

  navigate(routeName) {
      this.props.navigator.push({
        name: routeName
      })
  }

  render() {
      return  (

        <Image source={require('/Users/mahendramhatre/Desktop/Wayfarer/Wayfarer.png')} style= {styles.backgroundImage}>
            <View style ={styles.container}>

                  <Text  style = {{paddingLeft:20,paddingTop:200,fontSize:20,fontFamily:'ArialHebrew-Bold'}}> So where are we going ?</Text>

                  <TextInput style={styles.searchBar} placeholder= "   eg: Houston, San Jose"/>

                  <Text  style = {{paddingLeft:20,fontSize:20,fontFamily:'ArialHebrew-Bold'}}> And you are?</Text>
                  <Text  style = {{paddingLeft:20,fontSize:20,fontFamily:'ArialHebrew-Bold'}}> Or who you d want to be?</Text>


                  <TextInput style={styles.searchBar} placeholder= "   @Twitter Handle"/>

                  <TouchableHighlight  style = {{borderRadius:10,marginLeft:100,padding:20,backgroundColor:'#7A4099',width:180,alignItems: 'center'}} onPress={this.navigate.bind(this ,'Second')} >
                      <Text style = {{color:"#FFF",fontSize:20,fontFamily:'ArialHebrew-Bold'}}> Lets go !</Text>
                  </TouchableHighlight>
                </View>
        </Image>
        );
      }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop:50
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  button: {
   borderWidth: 1,
   borderRadius:10,
   marginBottom:30,
   height:60,
   width:150,
   justifyContent: 'center',
   alignItems: 'center'
  },
  searchBar: {
    borderRadius:10,
     marginBottom:30,
     marginLeft:20,
     marginTop:15,
     height:50,
     width:330,
     borderColor: '#E4E4E4',
     backgroundColor:'#FFF'

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
