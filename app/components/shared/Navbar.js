import React from 'react';
import Icon from 'react-native-vector-icons/Octicons'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


class Navbar extends React.Component {
  onLeftButtonPress = () => {
    this.props.onLeftButtonPress();
  };

  onRightButtonPress = () => {
    this.props.onRightButtonPress();
  };

  render() {
    var renderLeftButton = () => {
      if (!this.props.leftButtonHidden) {
        return (
          <TouchableOpacity onPress={this.onLeftButtonPress}>
            <Icon name={this.props.leftIconName} size={15} color="white" style={{padding:10}}/>
          </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity onPress={this.onLeftButtonPress}>
            <Icon name="search" size={15} color="rgba(0,0,0,0)" style={{padding:10}}/>
          </TouchableOpacity>
        )
      }
    }
    var renderRightButton = () => {
      if (!this.props.rightButtonHidden) {
        return (
          <TouchableOpacity onPress={this.onRightButtonPress}>
            <Icon name={this.props.rightIconName} size={15} color="white" style={{padding:10}}/>
          </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity onPress={this.onRightButtonPress}>
            <Icon name="search" size={15} color="rgba(0,0,0,0)" style={{padding:10}}/>
          </TouchableOpacity>
        )
      }
    }
    return (
      <View style={styles.topBar}>
        {renderLeftButton()}
        <Text style={styles.title}>
          {this.props.title.toUpperCase()}
        </Text>
        {renderRightButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 24,
    backgroundColor: '#2dbecd',
    alignItems: 'center',
    height: 90,
  },
  title: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 18,
  }
});

module.exports = Navbar;
