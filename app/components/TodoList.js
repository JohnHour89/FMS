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
  Alert,
  Button,
  Picker,
  Image,
  TouchableNativeFeedback,
  TouchableHighlight,
  Easing
} from 'react-native';

import {unauthUser, getTodos, deleteTodo, setTodos} from '../actions';
import NewTodo from './NewTodo';
import Navbar from './shared/Navbar';
import EditTodo from './EditTodo';
import TodoItem from './TodoItem';
import Hr from 'react-native-hr';
import Drawer from 'react-native-drawer-menu';

class TodoList extends React.Component {
  componentWillMount() {
    this.onRefresh();
  };

  onLogout = () => {
    this.props.dispatch(setTodos([]));
    this.props.dispatch(unauthUser);
  };

  addNewTodo = () => {
    this.props.navigator.push({
      component: NewTodo,
      title: 'New Todo',
      navigationBarHidden: true,
      id: 'NewTodo'
    })
  };

  editTodo = (title, description, category_route, building, related_entity, location, contact, contact_no, your_ref, attachment, created_by, ticket_id, id) => {
    this.props.navigator.push({
      component: EditTodo,
      title: 'Edit Todo',
      navigationBarHidden: true,
      passProps: { title: title, description: description, category_route: category_route, building: building, related_entity: related_entity, location:location, contact:contact, contact_no:contact_no, your_ref:your_ref, attachment:attachment, created_by:created_by, ticket_id:ticket_id, id:ticket_id },
      id: 'EditTodo'
    })
  };

  onRefresh = () => {
    this.setState({refreshing: true});
    this.props.dispatch(getTodos).then(() => {
      this.setState({refreshing: false});
    })
  };

  render() {
    var navigationView = (  
    <View style={{flex: 1, backgroundColor: '#1e90ff'}}>  
        <TouchableOpacity onPress={this.close} style={styles.sidemenu}>
          <Icon name="home" size={20} color="white"/>
            <Text style={[styles.textStyle, styles.textSmall]}>MENU</Text>
        </TouchableOpacity>
       <Hr lineColor='white' />
        <TouchableOpacity onPress={this.close} style={styles.sidemenu}>
          <Icon name="tasklist" size={20} color="white"/>
            <Text style={[styles.textStyle, styles.textSmall]}>WR List</Text>
        </TouchableOpacity>
        <Hr lineColor='#f8f8ff' /> 
        <TouchableOpacity onPress={this.addNewTodo} style={styles.sidemenu}>
          <Icon name="pencil" size={20} color="white"/>
            <Text style={[styles.textStyle, styles.textSmall]}>Create WR</Text>
        </TouchableOpacity> 
        <Hr lineColor='#f8f8ff' />
        <TouchableOpacity onPress={this.onLogout} style={styles.sidemenu}>
          <Icon name="sign-out" size={20} color="white"/>
            <Text style={[styles.textStyle, styles.textSmall]}>Log Out</Text>
        </TouchableOpacity>
    </View>  
    );  

    var renderTodos = () => {
      return this.props.todos.map((todo) => {
        return (
          <TouchableOpacity onPress={ () => this.editTodo(todo.title, todo.description, todo.category_route, todo.building, todo.related_entity, todo.location, todo.contact, todo.contact_no, todo.your_ref, todo.attachment, todo.created_by, todo.id, todo.id)} key={todo.id} text={todo.title} id={todo.id}>
            <TodoItem key={todo.id} text={todo.title} id={todo.id}/>
          </TouchableOpacity>
        )
      })
    }

    return (
      <Drawer
        ref={(comp) => {this.drawer = comp;}}
        style={styles.container}
        drawerWidth={200}
        leftDrawerContent={navigationView}
        type={Drawer.types.Overlay}
        customStyles={{
          leftDrawer: styles.leftDrawer,
          rightDrawer: styles.rightDrawer
        }}
        drawerWidth={200}
        disabled={this.state.disabled}
        drawerPosition={Drawer.positions.Both}
        easingFunc={Easing.ease}
      >  
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity
                  onPress={()=>{this.drawer&&this.drawer.openLeftDrawer();}}
                  style={styles.button}
                >
                <Icon name="three-bars" size={20} color="white"/>
                </TouchableOpacity>
          <Text style={styles.title}>
            Work Request List
          </Text>
          
          <TouchableOpacity onPress={this.addNewTodo}>
            <Icon name="plus" size={20} color="white"/>
          </TouchableOpacity>
        </View>
        <ScrollView
          onScroll={this.handleScroll}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}/>
          }
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.scrollViewContainer}>
          {renderTodos()}
        </ScrollView>
      </View> 
      </Drawer>
    );
  }
  open=()=>{
    this.drawer.openDrawer();
  }

  close=()=>{
    this.drawer.closeDrawer();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  topBar: {
    padding: 16,
    paddingTop: 40,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  bottomBar: {
    padding: 16,
    paddingTop: 10,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  centreBar: {
    padding: 100,
    paddingTop: 10,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  title: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center', 
    alignItems: 'center'
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
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    padding: 0,
  },
  textStyle: {
    margin: 10,  
    color: 'white',
    textAlign: 'center'
  },
  sidemenu: {
    paddingLeft: 8,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-start'
  },
});

var mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

module.exports = connect(mapStateToProps)(TodoList);

