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
  Image,
  ActivityIndicator
} from 'react-native';

var Second = require("./Second");

class First extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: "",
            twitterHandle: "",
            productArray: [],
            animating: false,
        };
    }

    render() {
        return (
            <Image source={require('./Wayfarer.png')} style= {styles.backgroundImage}>
                <View style ={styles.container}>

                      <Text  style = {{backgroundColor:'rgba(52,52,52,0)',paddingLeft:20,marginTop:150,fontSize:20,fontFamily:'ArialHebrew-Bold'}}> So where are we going ?</Text>

                      <TextInput
                          onChange={(event) => this.setState({location: event.nativeEvent.text})}
                          value={this.state.location}
                          style={styles.searchBar}
                          placeholder= "   eg: Houston, San Jose"/>

                      <Text  style = {{backgroundColor:'rgba(52,52,52,0)',paddingLeft:20,fontSize:20,fontFamily:'ArialHebrew-Bold'}}> And you are?</Text>
                      <Text  style = {{backgroundColor:'rgba(52,52,52,0)',paddingLeft:20,fontSize:20,fontFamily:'ArialHebrew-Bold'}}> Or who you d want to be?</Text>


                      <TextInput
                          onChange={(event) => this.setState({twitterHandle: event.nativeEvent.text})}
                          value={this.state.twitterHandle}
                          style={styles.searchBar}
                          placeholder= "   @Twitter Handle"/>

                      <TouchableHighlight  style = {{borderRadius:10,marginLeft:100,padding:20,backgroundColor:'#7A4099',width:180,alignItems: 'center'}} onPress={(this.onSubmitPressed.bind(this))}  >
                          <Text style = {{color:"#FFF",fontSize:20,fontFamily:'ArialHebrew-Bold'}}> Lets go !</Text>
                      </TouchableHighlight>
                      <ActivityIndicator
                        animating={this.state.animating}
                        style={[styles.centering, {height: 80}]}
                        size="large" />
                    </View>

            </Image>


        );
    }

    getTheData(callback) {
       var url = "https://wayfarer.incognitech.in/?twitter_handle="+this.state.twitterHandle+"&city="+this.state.location;
       fetch(url)
       .then(response => response.json())
       .then(json => callback(json))
       .catch(error => console.log(error));
     }

    onSubmitPressed() {
      this.setState({animating: true});
      var self = this;
      this.getTheData(function(json){
        productArray = json.businesses;
        this.setState({productArray:productArray});
        this.setState({animating: false});
        this.props.navigator.push({
            title: "",
            component: Second,
            passProps: {location: this.state.location, twitterHandle: this.state.twitterHandle, productArray: productArray},
        });

      }.bind(this));
    }

};

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
     backgroundColor:'#FFF',
     paddingLeft:10,
     paddingRight:10,

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
});

module.exports = First;
