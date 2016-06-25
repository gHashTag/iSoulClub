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
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SECTIONS = [
  {
    title: 'РАСПИСАНИЕ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: require('./img/marvell/marvell-0.jpeg'),
  },
  {
    title: 'СОБЫТИЯ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: require('./img/marvell/marvell-1.jpeg'),
  },
  {
    title: 'О КЛУБЕ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: require('./img/marvell/marvell-2.jpeg'),
  },
  {
    title: 'МАСТЕРА',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: require('./img/marvell/marvell-3.jpeg'),
  },
  {
    title: 'МЕНЮ КАФЕ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: require('./img/marvell/marvell-4.jpeg'),
  },
  {
    title: 'ПУТЕШЕСТВИЯ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: require('./img/marvell/marvell-4.jpeg'),
  },
  {
    title: 'ВИДЕО',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: require('./img/marvell/marvell-4.jpeg'),
  },
  {
    title: 'БЛОГ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: require('./img/marvell/marvell-4.jpeg'),
  },
  {
    title: 'СОТРУДНИЧЕСТВО',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: require('./img/marvell/marvell-4.jpeg'),
  },
  {
    title: 'ЦЕНЫ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
    pic: require('./img/marvell/marvell-4.jpeg'),
  },
];


class iSoulClub extends Component {
  _renderHeader(section) {
    return (
        <View>
          <Image style={styles.header} resizeMode='stretch' source={section.pic}><Text style={styles.headerText}>{section.title}</Text></Image>
        </View>
    );
  }

  _renderContent(section) {
    return (
        <Text style={styles.textContent}>{section.content}</Text>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
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
  container: {
    flex: 1,
    paddingTop: 20,
    //backgroundColor: 'orange'
  },
  header: {
    flex: 1,
    width: null,
    //height: null,
    //flexDirection: 'column',
    //alignItems: 'stretch',
    //backgroundColor: 'blue'
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
    color: '#f9f6fb',
    fontWeight: '200',
    paddingTop: 30,
    //backgroundColor: 'green'
  },
  textContent: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('iSoulClub', () => iSoulClub);
