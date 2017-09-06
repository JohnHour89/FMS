// var API_URL = 'http://10.0.3.2:3000/v1'; //Android
// var API_URL = 'http://localhost:3000/v1'; //IOS
//var API_URL = 'https://fathomless-reef-57802.herokuapp.com/v1';
//import { Platform } from 'react-native';

//const API_URL = Platform.OS === 'android'
  //? 'http://192.168.10.130:8000/api' // works for Genymotion
  //: 'http://localhost:8000/api';

var API_URL = 'http://192.168.10.130:8000/api';
//var API_URL = 'https://fms.bucitycorp.com.my/api';
exports.SIGNIN_URL = `${API_URL}/auth/token/`;
//exports.SIGNUP_URL = `${API_URL}/auth/token/`;
exports.TODOS_URL = (token) => `${API_URL}/workrequests/`;
exports.TODO_URL = (token, ticket_id) => `${API_URL}/workrequest/create/`;
exports.TODO_URLS = (token, id) => `${API_URL}/workrequests/${id}/`;
//exports.TODOS_URL = (user_id) => `${API_URL}/users/${user_id}/todos`;
//exports.TODO_URL = (user_id, todo_id) => `${API_URL}/users/${user_id}/todos/${todo_id}`;