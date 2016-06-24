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
    pic: require('./img/marvell/marvell-0.jpeg'),
  },
  {
    title: 'Second',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: require('./img/marvell/marvell-1.jpeg'),
  },
  {
    title: 'Third',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: require('./img/marvell/marvell-2.jpeg'),
  },
  {
    title: ' Fourth',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: require('./img/marvell/marvell-3.jpeg'),
  },
  {
    title: 'Fifth',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: require('./img/marvell/marvell-4.jpeg'),
  },
];



class iSoulClub extends Component {
  _renderHeader(section) {
    return (
        <Image style={styles.header} source={section.pic}><Text style={styles.headerText}>{section.title}</Text></Image>
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
    padding: 30,
    justifyContent: 'center'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    alignItems: 'center',
    color: '#f9f6fb',
    fontWeight: '200',
  },
  content: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
});

AppRegistry.registerComponent('iSoulClub', () => iSoulClub);
