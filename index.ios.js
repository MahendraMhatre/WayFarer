

import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

import First from '/Users/mahendramhatre/Desktop/Wayfarer/First.js';
import Second from '/Users/mahendramhatre/Desktop/Wayfarer/Second.js';


export default class Wayfarer extends Component {

/* Gets called when some element is pushed into the stack and depending on the route name the page is opened. Extra attributes can be 
  passed to it
 */
  renderScene(route,navigator) {
    if(route.name == 'root') {
      return (<First navigator={navigator} />);
    }
    if(route.name == 'Second') {
      return (<Second navigator={navigator} />);
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

AppRegistry.registerComponent('Wayfarer', () => Wayfarer);
