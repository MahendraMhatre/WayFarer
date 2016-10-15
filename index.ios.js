

import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

import First from '/Users/mahendramhatre/Desktop/Wayfarer/First.js';
import Second from '/Users/mahendramhatre/Desktop/Wayfarer/Second.js';


export default class Wayfarer extends Component {

  renderScene(route,navigator) {
    if(route.name == 'root') {
      return (<First navigator={navigator} />);
    }
    if(route.name == 'Second') {
      return (<Second navigator={navigator} />);
    }

  }

  render() {
    return (
      <Navigator
        initialRoute= {{name : 'root'}}
        renderScene={this.renderScene.bind(this)}
        />
    );
  }
}

AppRegistry.registerComponent('Wayfarer', () => Wayfarer);
