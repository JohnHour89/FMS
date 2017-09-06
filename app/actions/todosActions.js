import axios from 'axios';
import Keychain from 'react-native-keychain';

import {TODOS_URL, TODO_URL, TODO_URLS} from '../api';
import {addAlert} from './alertsActions';

exports.createTodo = (title, description, category_route, building, related_entity, location, contact, contact_no, your_ref, attachment, created_by, ticket_id) => {
  return function(dispatch) {
    return Keychain.getGenericPassword().then((credentials) => {
      var {username, password} = credentials;
      return axios.post(TODO_URL(username), {title, description, category_route, building, related_entity, location, contact, contact_no, your_ref, attachment, created_by, ticket_id}, {
        headers: {
          'Authorization': 'Basic YWRtaW46dHAybzZwMTR5',
          'Content-Type' : 'application/json' 
        }
      }).then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
        dispatch(addTodo(response.data));
      }).catch((err) => {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        dispatch(addAlert("Couldn't create work request."));
      })
    })
  }
}

exports.editTodos = (title, description, category_route, building, related_entity, location, contact, contact_no, your_ref, attachment, created_by, id) => {
  return function(dispatch) {
    return Keychain.getGenericPassword().then((credentials) => {
      var {username, password} = credentials;
      // todo_id was missing as an argument to TODO_URL -- hence `undefined`
      // in the URL in the server logs
      // return axios.put(TODO_URL(username), {text, todo_id}, {
      return axios.put(TODO_URLS(username, id), {title, description, category_route, building, related_entity, location, contact, contact_no, your_ref, attachment, created_by, id}, {
        headers: {
          'Authorization': 'Basic YWRtaW46dHAybzZwMTR5',
          'Content-Type' : 'application/json' 
        }
      }).then((response) => {
        // We send back an object at the key `todo`, not `todos`
        // I'm also renaming changeTodo to editTodo to match the reducer.
        // dispatch(changeTodo(response.data.todos));
        var {todo} = response.data;
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
        //dispatch(editTodo({title: todo.title, description: todo.description, category_route: todo.category_route, building: todo.building, related_entity: todo.related_entity, location: todo.location, contact: todo.contact, contact_no: todo.contact_no, your_ref: todo.your_ref, attachment: todo.attachment, created_by: todo.created_by, id: todo.id}));
      }).catch((err) => {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        dispatch(addAlert("Couldn't edit work request."));
      });
    });
  }
}

exports.deleteTodo = (todo_id) => {
  return function(dispatch) {
    return Keychain.getGenericPassword().then((credentials) => {
      var {username, password} = credentials;
      return axios.delete(TODO_URL(username, todo_id), {
        headers: {authorization: password}
      }).then((response) => {
        dispatch(removeTodo(todo_id));
      }).catch((err) => {
        dispatch(addAlert("Couldn't delete todo."));
      })
    })
  }
}

exports.getTodos = function(dispatch) {
  return Keychain.getGenericPassword().then((credentials) => {
    var {username, password} = credentials;
    return axios.get(TODOS_URL(username), {
      headers: {
                'Authorization': 'Basic YWRtaW46dHAybzZwMTR5',
                'Content-Type' : 'application/json' 
                }
    }).then((response) => {
      console.log(response.data.next);
      console.log(response.data.previous);
      console.log(response);
      dispatch(setTodos(response.data.results));
    }).catch((err) => {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      dispatch(addAlert("Couldn't get work request."));
    })
  })
}

var addTodo = (newTodo) => {
  return {
    type: 'ADD_TODO',
    newTodo
  }
}

var editTodo = (title, description, category_route, building, related_entity, location, contact, contact_no, your_ref, attachment, created_by, id) => {
  return {
    type: 'EDIT_TODO',
    title, 
    description, 
    category_route, 
    building, 
    related_entity, 
    location, 
    contact, 
    contact_no, 
    your_ref, 
    attachment, 
    created_by, 
    id
  }
}

var removeTodo = (todo_id) => {
  return {
    type: 'REMOVE_TODO',
    todo_id
  }
}

export var setTodos = (todos) => {
  return {
    type: 'SET_TODOS',
    todos
  }
}

