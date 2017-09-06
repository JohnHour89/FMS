import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import PropTypes from 'prop-types';

// import {} from '../actions';

import Login from './Login';
import Main from './Main';
import AlertContainer from './alerts/AlertContainer';

class App extends React.Component{
  constructor(props){
    super();
  }
  render() {
    var renderMainView = () => {
      if (this.props.token) {
        return (
          <Main />
        );
      } else {
        return (
          <Login />
        );
      }
    }
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content"/>
        {renderMainView()}
        <AlertContainer/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#ccc'
  },
});

var mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

module.exports = connect(mapStateToProps)(App);
