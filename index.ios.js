/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
  },
  {
    title: 'Third',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
  },
  {
    title: ' Fourth',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
  },
  {
    title: 'Fifth',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
  },
  {
    title: 'Sixth',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
  },
];



class iSoulClub extends Component {
  _renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
        <Text>{section.content}</Text>
    );
  }

  render() {
    return (
      <ScrollView style={styles.content}>
        <Accordion
          sections={SECTIONS}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />
        <Image source={require('./img/logo_og.png')}  style={styles.backgroundImage}></Image>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#2ca2d5',
    padding: 30,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch'
  }
});

AppRegistry.registerComponent('iSoulClub', () => iSoulClub);
