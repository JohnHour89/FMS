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
  TextInput,
  Picker,
  TouchableHighlight,
  DrawerLayoutAndroid,
  ToastAndroid,
  Easing,
  Image,
  Platform,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import pick from '../api/picker.js';
//import uploadFile from '../api/upload.js';
import {createTodo} from '../actions';
import {unauthUser, getTodos, deleteTodo, setTodos} from '../actions';
import TodoList from './TodoList';
import Cameras from './Cameras';
import Hr from 'react-native-hr';
import Drawer from 'react-native-drawer-menu';

const created = [
  {
    label: "CSD-1UP",
    value: "138"
  },
  {
    label: "CSD-1UR",
    value: "139"
  },
  {
    label: "samanthalee",
    value: "425"
  },
  {
    label: "jktan",
    value: "310"
  },
  {
    label: "edmundfoong",
    value: "319"
  },
  {
    label: "stellachuah",
    value: "353"
  },
  {
    label: "calvinkhor",
    value: "450"
  },
  {
    label: "teh",
    value: "457"
  },
  {
    label: "qc",
    value: "465"
  }
];

const categoryRoute = [
  {
    label: "Others",
    value: "1"
  },
  {
    label: "Air con",
    value: "2"
  }
];

const Building = [
  {
    label: "1 Utama Shopping Centre (New Wing)",
    value: "19"
  },
  {
    label: "1 Utama Shopping Centre (Old Wing)",
    value: "4"
  }
]

class FormPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  render() {
    if (Platform.OS === "android") {
      return (
        <Picker
          selectedValue={this.props.value}
          onValueChange={this.props.onValueChange}
        >
          {this.props.items.map((i, index) => (
            <Picker.Item key={index} label={i.label} value={i.value} />
          ))}
        </Picker>
      );
    } else {
      const selectedItem = this.props.items.find(
        i => i.value === this.props.value
      );
      const selectedLabel = selectedItem ? selectedItem.label : "";

      return (
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ modalVisible: true })}
          >
            <TextInput
              style={styles.input}
              editable={false}
              placeholder="Category Route"
              onChangeText={searchString => {
                this.setState({ searchString });
              }}
              value={selectedLabel}
            />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
          >
            <TouchableWithoutFeedback
              onPress={() => this.setState({ modalVisible: false })}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text
                    style={{ color: "blue" }}
                    onPress={() => this.setState({ modalVisible: false })}
                  >
                    Done
                  </Text>
                </View>
                <View
                  onStartShouldSetResponder={evt => true}
                  onResponderReject={evt => {}}
                >
                  <Picker
                    selectedValue={this.props.value}
                    onValueChange={this.props.onValueChange}
                  >
                    {this.props.items.map((i, index) => (
                      <Picker.Item
                        key={index}
                        label={i.label}
                        value={i.value}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      );
    }
  }
}

class FormPickers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  render() {
    if (Platform.OS === "android") {
      return (
        <Picker
          selectedValue={this.props.value}
          onValueChange={this.props.onValueChange}
        >
          {this.props.items.map((i, index) => (
            <Picker.Item key={index} label={i.label} value={i.value} />
          ))}
        </Picker>
      );
    } else {
      const selectedItem = this.props.items.find(
        i => i.value === this.props.value
      );
      const selectedLabel = selectedItem ? selectedItem.label : "";

      return (
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ modalVisible: true })}
          >
            <TextInput
              style={styles.input}
              editable={false}
              placeholder="Building"
              onChangeText={searchString => {
                this.setState({ searchString });
              }}
              value={selectedLabel}
            />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
          >
            <TouchableWithoutFeedback
              onPress={() => this.setState({ modalVisible: false })}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text
                    style={{ color: "blue" }}
                    onPress={() => this.setState({ modalVisible: false })}
                  >
                    Done
                  </Text>
                </View>
                <View
                  onStartShouldSetResponder={evt => true}
                  onResponderReject={evt => {}}
                >
                  <Picker
                    selectedValue={this.props.value}
                    onValueChange={this.props.onValueChange}
                  >
                    {this.props.items.map((i, index) => (
                      <Picker.Item
                        key={index}
                        label={i.label}
                        value={i.value}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      );
    }
  }
}

class FormPickerss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  render() {
    if (Platform.OS === "android") {
      return (
        <Picker
          selectedValue={this.props.value}
          onValueChange={this.props.onValueChange}
        >
          {this.props.items.map((i, index) => (
            <Picker.Item key={index} label={i.label} value={i.value} />
          ))}
        </Picker>
      );
    } else {
      const selectedItem = this.props.items.find(
        i => i.value === this.props.value
      );
      const selectedLabel = selectedItem ? selectedItem.label : "";

      return (
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ modalVisible: true })}
          >
            <TextInput
              style={styles.input}
              editable={false}
              placeholder="Created By"
              onChangeText={searchString => {
                this.setState({ searchString });
              }}
              value={selectedLabel}
            />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
          >
            <TouchableWithoutFeedback
              onPress={() => this.setState({ modalVisible: false })}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text
                    style={{ color: "blue" }}
                    onPress={() => this.setState({ modalVisible: false })}
                  >
                    Done
                  </Text>
                </View>
                <View
                  onStartShouldSetResponder={evt => true}
                  onResponderReject={evt => {}}
                >
                  <Picker
                    selectedValue={this.props.value}
                    onValueChange={this.props.onValueChange}
                  >
                    {this.props.items.map((i, index) => (
                      <Picker.Item
                        key={index}
                        label={i.label}
                        value={i.value}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      );
    }
  }
}

class NewTodo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      avatarSource: null,
      data: null,
      category_route: 1,
      building: 19,
      created_by: 138
    }
  }

  state = {
    title: undefined,
    description: undefined,
    related_entity: undefined,
    location: undefined,
    contact: undefined,
    contact_no: undefined,
    your_ref: undefined,
    attachment: undefined,
    ticket_id: undefined,
    loading: false
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
    if (title && title != "" || description && description != "" || category_route && category_route != "" || building && building != "" || related_entity && related_entity != "" || location && location != "" || contact && contact != "" || contact_no && contact_no != "" || your_ref && your_ref != "" || attachment && attachment != "" || created_by && created_by != "" || ticket_id && ticket_id != "" ) {
      this.setState({loading: true});
      dispatch(createTodo(title, description, category_route, building, related_entity, location, contact, contact_no, your_ref, attachment, created_by, ticket_id)).then(() => {
        this.setState({loading: false});
        this.props.navigator.pop();
      });
    }
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
    console.log("test", this.state.ticket_id, this.state.uri);
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
          <ScrollView
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={(title) => {
                  this.setState({title})
                }}
                placeholder="Subject"
                style={styles.input}/>
              <TextInput
                onChangeText={(description) => {
                  this.setState({description})
                }}
                placeholder="Description"
                style={styles.input}/>
              <FormPicker
                items={categoryRoute}
                value={this.state.category_route}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ category_route: itemValue })}
              />
              <FormPickers
                items={Building}
                value={this.state.building}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ building: itemValue })}
              />   
              <TextInput
                onChangeText={(related_entity) => {
                  this.setState({related_entity})
                }}
                placeholder="Related entity"
                style={styles.input}/>
              <TextInput
                onChangeText={(location) => {
                  this.setState({location})
                }}
                placeholder="Location"
                style={styles.input}/>
              <TextInput
                onChangeText={(contact) => {
                  this.setState({contact})
                }}
                placeholder="Contact"
                style={styles.input}/>
              <TextInput
                onChangeText={(contact_no) => {
                  this.setState({contact_no})
                }}
                placeholder="Contact no"
                style={styles.input}/>
              <TextInput
                onChangeText={(your_ref) => {
                  this.setState({your_ref})
                }}
                placeholder="Your ref"
                style={styles.input}/>
              <TextInput
                onChangeText={(attachment) => {
                  this.setState({attachment})
                }}
                placeholder="Attachment"
                style={styles.input}
                value={JSON.stringify(this.state.avatarSource)}
                />
                {img}
                <TouchableOpacity onPress={this.show.bind(this)}>
                  <Icon name="device-camera" size={20} color="black"/>
                </TouchableOpacity>
              <FormPickerss
                items={created}
                value={this.state.created_by}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ created_by: itemValue })}
              />
              <TextInput
                onChangeText={(ticket_id) => {
                  this.setState({ticket_id})
                }}
                placeholder="Ticket ID"
                style={styles.input}/>
            </View>
          </ScrollView>
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
            Create Work Request
          </Text>
          <TouchableOpacity onPress={this.onBack}>
            <Icon name="chevron-left" size={20} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.addNewTodo}>
            <Icon name="check" size={20} color="white"/>
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
    console.log("img", this.state.avatarSource);
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
    height: 50
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
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  sidemenu: {
    paddingLeft: 8,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-start'
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  modalContent: {
    justifyContent: "flex-end",
    flexDirection: "row",
    padding: 4,
    backgroundColor: "#ececec"
  }
});

var mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

module.exports = connect(mapStateToProps)(NewTodo);
