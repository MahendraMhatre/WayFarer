"use strict";

import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View,StyleSheet, NavigatorIOS, TextInput, TouchableHighlight, ListView } from 'react-native'

var productArray = [];
class Second extends Component {

  constructor(props) {
      super(props);

      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
      this.state = {
        dataSource: ds.cloneWithRows(productArray),
        isLoading:true,
        username: this.props.username,
        password: this.props.password

      };
    }

    getTheData(callback) {
       var url = "https://raw.githubusercontent.com/darkarmyIN/React-Native-DynamicListView/master/appledata.json";
       fetch(url)
       .then(response => response.json())
       .then(json => callback(json))
       .catch(error => console.log(error));
     }

    componentDidMount() {
    this.getTheData(function(json){
    productArray = json;
    this.setState = ({
      datasource:this.state.dataSource.cloneWithRows(productArray),
      isLoading:false
    })
  }.bind(this));

  }



   renderRow(rowData, sectionID, rowID) {
    return (

      <TouchableHighlight  style={{paddingVertical:5,borderBottomWidth:0.5,borderBottomColor:'rgba(0,0,0,0.1)',height:44,alignItems:'center',flexDirection:'row',paddingHorizontal:10}}>
         <View>
         <Text style={{fontSize: 20, color: '#000000'}} numberOfLines={1}>{rowData.display_string}</Text>
         <View style={{height: 1, backgroundColor: '#dddddd'}}/>

         </View>
      </TouchableHighlight>
   );
 }


    render() {
        return (

            <Image source={require('./SearchPage.png')} style= {styles.backgroundImage}>
               <View style = {{marginTop:50}}>
                   <TextInput style={styles.searchBar} placeholder= "   eg: Houston, San Jose"/>
                   <View style={{flexDirection: 'row'}}>
                     <TextInput style={styles.searchBar1} placeholder= "   @Twitter Handle"   />
                     <TouchableHighlight  style ={{borderRadius:10,backgroundColor:'#7A4099',width:100,marginLeft:10,marginTop:5,paddingTop:10,height:40,alignItems:'center'}} >
                      <Text style = {{color:"#FFF",fontSize:20,fontFamily:'ArialHebrew-Bold'}}> {this.props.username}</Text>
                     </TouchableHighlight>
                   </View>


                   <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} enableEmptySections={true}/>


               </View>
             </Image>
        );
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
     backgroundColor:'#FFF'

},
searchBar1: {
  borderRadius:10,
   marginBottom:30,
   marginLeft:20,
   marginTop:5,
   height:40,
   width:220,
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
});


module.exports = Second;
