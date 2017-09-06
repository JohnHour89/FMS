import axios from 'axios';
import Keychain from 'react-native-keychain';

import {SIGNIN_URL, SIGNUP_URL, TOKEN_URL} from '../api';
import {addAlert} from './alertsActions';

/*
exports.loginUser = (username, password) => {
  return function(dispatch) {
    return axios.post(SIGNIN_URL, {username, password})
    .then((response) => {
      return response;
      console.log(response);
      var {user_id, token} = response.data;
      Keychain.setGenericPassword(user_id, token)
        .then(function() {
          dispatch(addAlert(token));
          dispatch(authUser(user_id));
        }).catch((error) => {
          console.log(error);
          dispatch(addAlert("Could not log in."));
        });
    }).catch((error) => {
      dispatch(addAlert("Could not log in."));
    });
  }
}
*/

/*
exports.loginUser = (username, password) => {
  return function(dispatch) {
    return axios({
     url : SIGNIN_URL, 
     timeout: 20000,
     withCredentials: true,
     method: 'post',
     responseType: 'json',
     data: {
        username: username,
        password: password
     },
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      }
    })
    .then(
      response => {
        return response;
        console.log(response);
        console.log(username, password);
        console.log('success for user login response');  // This log does not appear
        dispatch(addAlert(token));  //  Store it in the state
      },
      error    => {
        console.log(username, password);
        console.log('fail to login user');  // Neither does this one
        dispatch(addAlert("Could not log in."));
        // Track the error
        piwik.trackError( { message: error, filename: 'userAction', lineno: 229 }, 'User Login Error');
      }
    );
  };  
};
*/

exports.loginUser = (username, password) => {
  return function(dispatch) {
    return axios.post(SIGNIN_URL, {username, password}).then((response) => {
      var {token} = response.data;
      console.log(token);
      Keychain.setGenericPassword(username, token)
        .then(function() {
          dispatch(addAlert(token));
          dispatch(authUser(token));
        }).catch((error) => {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
        });
      }).catch((error) => {
      dispatch(addAlert("Could not sign in."));
    });
  }
}
  
exports.signupUser = (username, password) => {
  return function(dispatch) {
    return axios.post(SIGNUP_URL, {username, password}).then((response) => {
      var {token, token} = response.data;
      Keychain.setGenericPassword(username, token)
        .then(function() {
          dispatch(addAlert(token));
        }).catch((error) => {
          dispatch(addAlert("Could not sign up."));
        });
    }).catch((error) => {
      dispatch(addAlert("Could not sign up."));
    });
  }
}

authUser = (token) => {
  return {
    type: 'AUTH_USER',
    token
  }
}

exports.unauthUser = {
  type: 'UNAUTH_USER'
}
