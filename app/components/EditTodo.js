import React, { Component } from 'react';
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
  Alert,
  AlertIOS,
  Picker,
  Easing
} from 'react-native';

import {createTodo, getTodos, editTodos, setTodos} from '../actions';
import Hr from 'react-native-hr';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import Drawer from 'react-native-drawer-menu';
import FloatLabelTextInput from 'react-native-floating-label-text-input';

class EditTodo extends React.Component {
  ComponentWillMount(){
    this.onRefresh();
    this.onBack();
  };

  state = {
    title: this.props.title,
    description: this.props.description,
    category_route: this.props.category_route,
    building: this.props.building,
    related_entity: this.props.related_entity,
    location: this.props.location,
    contact: this.props.contact,
    contact_no: this.props.contact_no,
    your_ref: this.props.your_ref,
    attachment: this.props.attachment,
    created_by: this.props.created_by,
    ticket_id: this.props.ticket_id,
    loading: false
  };

  onBack = () => {
    this.props.navigator.pop();
  };

  onRefresh = () => {
    this.setState({refreshing: true});
    this.props.dispatch(getTodos).then(() => {
      this.setState({refreshing: false});
    })
  };

  addNewTodo = () => {
    var {title} = this.state;
    var {description} = this.state;
    var {category_route} = this.state;
    var {building} = this.state;
    var {related_entity} = this.state;
    var {location} = this.state;
    var {contact} = this.state;
    var {contact_no} = this.state;
    var {your_ref} = this.state;
    var {attachment} = this.state;
    var {created_by} = this.state;
    var {ticket_id} = this.state;
    var {dispatch} = this.props;
    Alert.alert(
      'Update Work Request',
      'Are you sure want to update the Work Request?',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.props.dispatch(editTodos(title, description, category_route, building, related_entity, location, contact, contact_no, your_ref, attachment, created_by, ticket_id)).then(() =>
        {
          this.setState({loading: false});
          this.props.navigator.pop();
          this.onRefresh();
          this.onBack();
        })
      },
      ],
    )
  };

  TodoList = () => {
    this.props.navigator.push({
      component: TodoList,
      title: 'Todo List',
      navigationBarHidden: true,
      id: 'TodoList'
    })
  };
  
  NewTodo = () => {
    this.props.navigator.push({
      component: NewTodo,
      title: 'New Todo',
      navigationBarHidden: true,
      id: 'NewTodo'
    })
  };

  render() {
    console.log("text", this.props.title, this.props.description, this.props.category_route, this.props.building, this.props.related_entity, this.props.location, this.props.contact, this.props.contact_no, this.props.your_ref, this.props.attachment, this.props.created_by, this.props.ticket_id, this.props.building, this.props.created_by);

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
        <TouchableOpacity onPress={this.NewTodo} style={styles.sidemenu}>
          <Icon name="pencil" size={20} color="white"/>
            <Text style={[styles.textStyle, styles.textSmall]}>Create WR</Text>
        </TouchableOpacity>
        <Hr lineColor='#f8f8ff' />
        <TouchableOpacity onPress={this.onBack} style={styles.sidemenu}>
          <Icon name="arrow-left" size={20} color="white"/>
            <Text style={[styles.textStyle, styles.textSmall]}>Go Back</Text>
        </TouchableOpacity>  
    </View>  
    );  

    var renderScrollViewOrLoading = () => {
      if (this.state.loading) {
        return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
              Updating the Work Request...
            </Text>
          </View>
        );
      } else {
        return (
        <ScrollView
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.inputContainer}>
            <FloatLabelTextInput
              style={styles.input}
              value={this.state.title}
              editable={false}
              onChangeText={(title) => {
                this.setState({title})
              }}
              placeholder="Subject"
              />
            <FloatLabelTextInput
              style={styles.input}
              value={this.state.description}
              editable={false}
              onChangeText={(description) => {
                this.setState({description})
              }}
              placeholder="Description"
            />
            <Picker
                enabled={false}
                selectedValue={this.state.category_route}
                onValueChange={(itemValue, itemIndex) => this.setState({category_route: itemValue})}>
                <Picker.Item label="Others" value="1" />
                <Picker.Item label="Air con" value="2" />
            </Picker>
            <Picker 
                enabled={false}
                selectedValue={this.state.building.toString()}
                onValueChange={(itemValue, itemIndex) => this.setState({building: itemValue})}>
                <Picker.Item label="1 Utama Shopping Centre (New Wing)" value="19" />
                <Picker.Item label="1 Utama Shopping Centre (Old Wing)" value="4" />
              </Picker>
            <FloatLabelTextInput
              style={styles.input}
              value={this.state.related_entity}
              editable={false}
              onChangeText={(related_entity) => {
                this.setState({related_entity})
              }}
              placeholder="Related entity"
            />
            <FloatLabelTextInput
              style={styles.input}
              value={this.state.location}
              editable={false}
              onChangeText={(location) => {
                this.setState({location})
              }}
              placeholder="Location"
            />
            <FloatLabelTextInput
              style={styles.input}
              value={this.state.contact}
              editable={false}
              onChangeText={(contact) => {
                this.setState({contact})
              }}
              placeholder="Contact"
            />
            <FloatLabelTextInput
              style={styles.input}
              value={this.state.contact_no}
              editable={false}
              onChangeText={(contact_no) => {
                this.setState({contact_no})
              }}
              placeholder="Contact no"
            />
            <FloatLabelTextInput
              style={styles.input}
              value={this.state.your_ref}
              editable={false}
              onChangeText={(your_ref) => {
                this.setState({your_ref})
              }}
              placeholder="Your ref"
            />
            <FloatLabelTextInput
                onChangeText={(attachment) => {
                  this.setState({attachment})
                }}
                editable={false}
                placeholder="Attachment"
                style={styles.input}/>
            <Picker
                enabled={false}
                selectedValue={this.state.created_by.toString()}
                onValueChange={(itemValue, itemIndex) => this.setState({created_by: itemValue})}>
                <Picker.Item label="CSD-1UP" value="138" />
                <Picker.Item label="CSD-1UR" value="139" />
                <Picker.Item label="samanthalee" value="425" />
                <Picker.Item label="jktan" value="310" />
                <Picker.Item label="edmundfoong" value="319" />
                <Picker.Item label="stellachuah" value="353" />
                <Picker.Item label="estherleong" value="354" />
                <Picker.Item label="calvinkhor" value="450" />
                <Picker.Item label="teh" value="457" />
                <Picker.Item label="qc" value="442" />
                <Picker.Item label="1utama" value="465" />
              </Picker>
              <FloatLabelTextInput
                editable={false}
                onChangeText={(ticket_id) => {
                  this.setState({ticket_id})
                }}
                placeholder="Ticket ID"
                style={styles.input}
                />
          </View>
        </ScrollView>
        );
      }
    }
    return(
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
            View Work Request
          </Text>
          <TouchableOpacity onPress={this.onBack}>
            <Icon name="chevron-left" size={20} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addNewTodo}>
            <Icon name="chevron-right" size={20} color="white"/>
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
    borderColor: "#2ecc71"
  },
  input: {
    height: 50
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
  editorContainer: {
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#2ecc71",
    height: 300,
  },
});

var mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

module.exports = connect(mapStateToProps)(EditTodo);
