import React, {Component} from 'react';
import {
  View,Text,
  ScrollView,Navigator
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Tabs from './tabs';
import Friends from '../Friends.js';
import Trips from '../Trips.js';


export default class HomeTab extends Component{

   render() {
    let Tabname = ["Plan Trip","Friends"];
    return (
      <ScrollableTabView
        initialPage={this.props.index}
        renderTabBar={() => <Tabs name={Tabname} />}
      >
        <ScrollView tabLabel="md-jet">
          <Trips navigator={this.props.navigator}/>
        </ScrollView>
        <ScrollView tabLabel="md-contact">
          <Friends navigator={this.props.navigator}/>
        </ScrollView>
    </ScrollableTabView>
    );

  }
}
