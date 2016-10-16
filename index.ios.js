

import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

import First from './First.js';
import Second from './Second.js';


export default class Wayfarer extends Component {

/* Gets called when some element is pushed into the stack and depending on the route name the page is opened. Extra attributes can be
  passed to it
 */
  renderScene(route,navigator) {
    if(route.name == 'root') {
      return (<First navigator={navigator} />);
    }

    if(route.name == 'Second') {
      return (<Second navigator={navigator}   getBack={() => {
         navigator.pop();
       }} />);
    }


  }

  /*To configure from which direction the screen should float depending on condition default is from right */
  configureScene(route, routeStack) {
    if(route.type === 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.PushFromRight
  }



  render() {
    return (
      <Navigator
        configureScene={ this.configureScene }
        initialRoute= {{name : 'root'}}
        renderScene={this.renderScene.bind(this)}

        />
    );
  }
}
module.exports = Wayfarer;

AppRegistry.registerComponent('Wayfarer', () => Wayfarer);
