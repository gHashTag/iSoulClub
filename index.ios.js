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
    pic: './img/marvell/marvell-0',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: './img/marvell/marvell-1',
  },
  {
    title: 'Third',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: './img/marvell/marvell-2',
  },
  {
    title: ' Fourth',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: './img/marvell/marvell-3',
  },
  {
    title: 'Fifth',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: './img/marvell/marvell-4',
  },
];



class iSoulClub extends Component {
  _renderHeader(section) {
    return (
        <Image style={styles.backgroundImage}>{section.pic}><Text style={styles.headerText}>{section.title}</Text></Image>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#1fa6df',
    padding: 30
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    alignItems: 'center',
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
