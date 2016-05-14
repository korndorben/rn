/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

class app extends Component {
  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{ name: 'Main', component: Main }}
        renderScene={ this.renderScene } />
    );
  }

  renderScene(route, navigator) {
    var Component = route.component;
    return <Component navigator={navigator} route={route} />
  }
}

class Home extends Component {
  nav(_name) {
    this.props.navigator.push({ name: _name,component:Main });
  }
  render() {
    return (
      <TouchableHighlight onPress={() => this.nav("Main") }>
        <Text>Home mmm </Text>
      </TouchableHighlight>
    )
  }
}

class Main extends Component {
  nav(_name) {
    this.props.navigator.push({ name: _name,component:Home });
  }
  render() {
    return (
      <TouchableHighlight onPress={() => this.nav("Home") }>
        <Text>Main GO GO GO </Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('app', () => app);
