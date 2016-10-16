"use strict";

import React, { Component } from 'react';
import{
  AppRegistry,
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
  ListView,
  Switch,
  ActivityIndicator,
} from 'react-native'

// var productArray = [];
class Second extends Component {

  constructor(props) {
      super(props);

      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
      this.state = {
        dataSource: ds.cloneWithRows(this.props.productArray),
        location: this.props.location,
        twitterHandle: this.props.twitterHandle,
        productArray: this.props.productArray,
        twitterScores: this.props.twitterScores,
        isHackRiceModeOn: false,
        animating: false,
      };
    }


   renderRow(rowData, sectionID, rowID) {
    return (

      <TouchableHighlight  style={{paddingVertical:5,borderBottomWidth:0.5,borderBottomColor:'rgba(0,0,0,0.1)',height:44,alignItems:'center',flexDirection:'row',paddingHorizontal:10}}>
         <View>
         <Text style={{fontSize: 20, color: '#000000'}} numberOfLines={1}>{rowData.name}</Text>
         <View style={{height: 1, backgroundColor: '#dddddd'}}/>

         </View>
      </TouchableHighlight>
   );
 }


    render() {
        return (

            <Image source={require('./SearchPage.png')} style= {styles.backgroundImage}>
               <View style = {{marginTop:100,flex:1}}>
                   <TextInput style={styles.searchBar} placeholder= "   eg: Houston, San Jose"
                    value={this.props.location}
                    onChange={(event) => this.setState({location: event.nativeEvent.text})} />
                   <View style={{flexDirection: 'row'}}>
                     <TextInput style={styles.searchBar1} placeholder= "   @Twitter Handle"
                      value={this.props.twitterHandle}
                      onChange={(event) => this.setState({twitterHandle: event.nativeEvent.text})}/>
                     <TouchableHighlight
                      style ={{borderRadius:10,backgroundColor:'#7A4099',width:100,marginLeft:10,marginTop:5,paddingTop:7.5,height:40,alignItems:'center'}}
                      onPress={(this.onSubmitPressed.bind(this))} >
                      <Text style = {{color:"#FFF",fontSize:20,fontFamily:'ArialHebrew-Bold'}}> Refine</Text>
                     </TouchableHighlight>
                   </View>
                   <View style={{flexDirection: 'row'}}>
                     <Switch
                        onValueChange={(value) => this.setState({isHackRiceModeOn: value})}
                        style={{marginBottom: 10, marginLeft: 20}}
                        value={this.state.isHackRiceModeOn} />
                      <Text style={{backgroundColor: 'rgba(52,52,52,0)', marginLeft: 10, marginTop: 5, alignItems:'flex-start'}}>Enable #HackRice Mode</Text>
                      <ActivityIndicator
                        animating={this.state.animating}
                        style={[styles.centering, {height: 80}]}
                        size="large" />
                    </View>

                   <ListView
                    style={styles.businessList}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    automaticallyAdjustContentInsets={false} />
               </View>
             </Image>
        );
    }

    getTheData(callback) {
       var url = "https://wayfarer.incognitech.in/?twitter_handle="+this.state.twitterHandle+"&city="+this.state.location;
       if(this.state.isHackRiceModeOn) {
         url += "&cool_mode=true";
       }
       console.log(url);
       fetch(url)
       .then(response => response.json())
       .then(json => callback(json))
       .catch(error => console.log(error));
     }

    onSubmitPressed() {
      this.setState({animating: true});
      var self = this;
      this.getTheData(function(json){
        console.log(json);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
        productArray = json.businesses;
        this.setState({productArray:productArray});
        this.setState({dataSource: ds.cloneWithRows(productArray)});
        this.setState({twitterScores: json.wayfarer_twitter_scores});
        this.setState({animating: false});
      }.bind(this));
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  centering: {
    marginTop: -25,
    marginLeft: 20,
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
     marginBottom:15,
     marginLeft:20,
     marginTop:45,
     height:40,
     width:330,
     borderColor: '#E4E4E4',
     backgroundColor:'#FFF',
     paddingLeft:10,
     paddingRight:10,

},
searchBar1: {
  borderRadius:10,
   marginBottom:30,
   marginLeft:20,
   marginTop:5,
   height:40,
   width:220,
   borderColor: '#E4E4E4',
   backgroundColor:'#FFF',
   paddingLeft:10,
   paddingRight:10,

},
businessList: {
  marginLeft: 20,
  marginRight: 20,
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


module.exports = Second;
