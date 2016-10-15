import React, { Component,PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image,
  TextInput
} from 'react-native';

​
export default class Second extends Component {

  static propTypes = {
    getBack: PropTypes.func.isRequired,
  }
  render() {
    return (
       <Image source={require('/Users/mahendramhatre/Desktop/Wayfarer/SearchPage.png')} style= {styles.backgroundImage}>
          <View style = {{marginTop:50}}>
              <TextInput style={styles.searchBar} placeholder= "   eg: Houston, San Jose"/>
              <TextInput style={styles.searchBar1} placeholder= "   @Twitter Handle"   />
              <TouchableHighlight  style = {{borderRadius:10,backgroundColor:'#7A4099',width:80,padding:8,alignItems: 'center'}} >
                  <Text style = {{color:"#FFF",fontSize:20,fontFamily:'ArialHebrew-Bold'}}> Refine</Text>
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
    alignItems: 'center',
    backgroundColor: '#FFF952',
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
    width:80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    borderRadius:10,
     marginBottom:30,
     marginLeft:20,
     marginTop:15,
     height:40,
     width:330,
     borderColor: '#E4E4E4',
     backgroundColor:'#FFF'

},
searchBar1: {
  borderRadius:10,
   marginBottom:30,
   marginLeft:20,
   marginTop:15,
   height:40,
   width:250,
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
