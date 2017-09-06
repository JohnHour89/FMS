import React, {Component} from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  TextInput,
  Picker,
  TouchableHighlight,
  DrawerLayoutAndroid,
  ToastAndroid,
  Easing,
  Image
} from 'react-native';
import pick from '../api/picker.js';
//import uploadFile from '../api/upload.js';
import {createTodo} from '../actions';
import {unauthUser, getTodos, deleteTodo, setTodos} from '../actions';
import TodoList from './TodoList';
import Hr from 'react-native-hr';
import Drawer from 'react-native-drawer-menu';

class Cameras extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      avatarSource: null,
      data: null
    }
  }

  state = {
    title: undefined,
    description: undefined,
    category_route: 1,
    building: 19,
    related_entity: undefined,
    location: undefined,
    contact: undefined,
    contact_no: undefined,
    your_ref: undefined,
    attachment: undefined,
    created_by: 138,
    ticket_id: undefined,
    loading: false
  };

  onBack = () => {
    this.props.navigator.pop();
  };
  
  TodoList = () => {
    this.props.navigator.push({
      component: TodoList,
      title: 'Todo List',
      navigationBarHidden: true,
      id: 'TodoList'
    })
  };

  Cameras = () => {
    this.props.navigator.push({
      component: Cameras,
      title: 'Cameras',
      navigationBarHidden: true,
      id: 'Cameras'
    })
  };
  
  onLogout = () => {
    this.props.dispatch(setTodos([]));
    this.props.dispatch(unauthUser);
  };

  render() {
    let img = this.state.avatarSource == null? null:
      <Image
        source={this.state.avatarSource}
        style={{height: 200, width: 200}}
      />

    var navigationView = (  
    <View style={{flex: 1, backgroundColor: '#1e90ff'}}>  
        <TouchableOpacity onPress={this.close} style={styles.sidemenu}>
          <Icon name="home" size={20} color="white"/>
            <Text style={[styles.textStyle, styles.textSmall]}>MENU</Text>
        </TouchableOpacity>
       <Hr lineColor='white' />
        <TouchableOpacity onPress={this.TodoList} style={styles.sidemenu}>
          <Icon name="tasklist" size={20} color="white"/>
            <Text style={[styles.textStyle, styles.textSmall]}>WR List</Text>
        </TouchableOpacity>
        <Hr lineColor='#f8f8ff' /> 
        <TouchableOpacity onPress={this.close} style={styles.sidemenu}>
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

    var renderScrollViewOrLoading = () => {
      if (this.state.loading) {
        return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
              Creating New Work Request...
            </Text>
          </View>
        );
      } else {
        return (
          <View>
            <Text>Hello React Native</Text>
            <TouchableOpacity onPress={this.show.bind(this)}>
              <Text>Show Image Picker</Text>
            </TouchableOpacity>
            {img}
          </View>
        );
      }
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
          <TouchableOpacity onPress={()=>{this.drawer&&this.drawer.openLeftDrawer();}}>
            <Icon name="three-bars" size={20} color="white"/>
          </TouchableOpacity>
          <Text style={styles.title}>
            Taking Picture Here
          </Text>
          <TouchableOpacity onPress={this.onBack}>
            <Icon name="chevron-left" size={20} color="white"/>
          </TouchableOpacity>
        </View>
        {renderScrollViewOrLoading()}
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
  show(){
    pick((source, data) => this.setState({avatarSource: source, data: data}));
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
    paddingTop: 24,
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
  inputContainer: {
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#2ecc71",
    height: 500
  },
  editorContainer: {
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#2ecc71",
    height: 300,
  },
  input: {
    height: 300
  },
  button: {
    position: 'absolute',
    top: 10,
    padding: 10,
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    padding: 10,
  },
  textStyle: {
    margin: 10,  
    color: 'white',
    textAlign: 'center'
  },
  richText: {
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5 / 2,
    color: '#000',
    padding: 10,
    margin: 40,
    overflow:'hidden'
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

module.exports = connect(mapStateToProps)(Cameras);
