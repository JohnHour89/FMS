import React from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Navigator,
  Alert
} from 'react-native';

import {unauthUser, getTodos, deleteTodo, setTodos} from '../actions';

class TodoItem extends React.Component {
  state = {
    deleting: false
  };

  onDelete = () => {
    Alert.alert(
      'Delete Employee',
      'Are you sure want to delete the employee?',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.props.dispatch(deleteTodo(this.props.id))},
      ],
      //{ cancelable: false }
    )
    //this.setState({deleting: true});
    //this.props.dispatch(deleteTodo(this.props.id));
  };

  render() {
    return (
      <View style={styles.todoContainer}>
          <Text>{this.props.text} {this.props.text2}</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  title: {
    color: 'white',
    fontSize: 20
  },
  todoContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: -1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

var mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

module.exports = connect(mapStateToProps)(TodoItem);
