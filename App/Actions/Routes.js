import React,{Component} from 'react';

import Login from '../Activities/Login.js';
import Home from '../Activities/Home.js';
import TripDetail from '../Activities/TripDetail.js';

exports.renderScene = function(route, navigator) {
  if(route.name == 'Login') {
    return <Login navigator={navigator} {...route.passProps}  />
  }
  if(route.name == 'Home') {
    return <Home navigator={navigator} {...route.passProps}  />
  }
  if(route.name == 'TripDetail') {
    return <TripDetail navigator={navigator} {...route.passProps}  />
  }
};

