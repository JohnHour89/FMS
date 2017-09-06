import React from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Navigator,
  Alert,
  Button,
  Picker,
  Image,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';

import {unauthUser, getTodos, deleteTodo, setTodos, PgetTodos, NgetTodos} from '../actions';
import NewTodo from './NewTodo';
import Navbar from './shared/Navbar';
import EditTodo from './EditTodo';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import Login from './Login';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    padding: 0,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

export default function Menu({ onItemSelected}) {
  addNewTodo = () => {
    this.props.navigator.push({
      id: 'NewTodo'
    });
  }

  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <TouchableHighlight onPress={this.addNewTodo.bind(this)} style={styles.button}>
        <Text> Second Page </Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={this.TodoList} style={styles.button}>
        <Text> First Page </Text>
      </TouchableHighlight>

      <Text
        onPress={() => onItemSelected('Logout')}
        style={styles.item}
      >
        Login 
      </Text>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
