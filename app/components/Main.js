import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
  Navigator
} from 'react-native';
import PropTypes from 'prop-types';

// import {unauthUser} from '../actions';
// onLogout: function() {
//   this.props.dispatch(unauthUser);
// },
// <TouchableOpacity onPress={this.onLogout}>
//   <Text>
//     Logout
//   </Text>
// </TouchableOpacity>

import TodoList from './TodoList';
import NewTodo from './NewTodo';
import EditTodo from './EditTodo';
import Cameras from './Cameras';

var routes = [
  {
    component: TodoList,
    title: 'TodoList',
    id: 'TodoList'
  }
];

class Main extends React.Component{
  render() {
    return (
      <Navigator
      initialRoute={routes[0]}
      initialRouteStack={routes}
      renderScene={this.navigatorRenderScene}
      style={{flex: 1}}/>
    );
  }

  navigatorRenderScene(route, navigator){
    _navigator = navigator;
    switch (route.id){
      case 'TodoList':
        return(<TodoList navigator={navigator} {...route.passProps}/>);
      case 'NewTodo':
        return(<NewTodo navigator={navigator} {...route.passProps}/>);
      case 'EditTodo':
        return(<EditTodo navigator={navigator} {...route.passProps}/>);
      case 'Cameras':
        return(<Cameras navigator={navigator} {...route.passProps}/>);
    } 
  }
};

export default Main;
