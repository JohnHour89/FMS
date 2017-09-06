import React from 'react';
import {reduxForm} from 'redux-form';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import {loginUser, signupUser, addAlert} from '../actions';

class Login extends React.Component {
  state = {
    loading: false
  };

  onSignIn = () => {
    var {dispatch, fields: {username, password}} = this.props;
    this.setState({
      loading: true
    });
    dispatch(loginUser(username.value, password.value)).then(() => {
      this.setState({
        loading: false
      });
    });
  };

  onSignUp = () => {
    var {dispatch, fields: {username, password}} = this.props;
    this.setState({
      loading: true
    });
    dispatch(signupUser(username.value, password.value)).then(() => {
      this.setState({
        loading: false
      });
    });
  };

  render() {
    var {fields: {username, password}} = this.props;
    var renderError = (field) => {
      if (field.touched && field.error) {
        return (
          <Text style={styles.formError}>{field.error}</Text>
        )
      }
    }

    if (this.state.loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Loading...
          </Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Work Request
            </Text>
          </View>
          <View style={styles.field}>
            <TextInput
              {...username}
              placeholder="Username"
              style={styles.textInput}/>
            <View>
              {renderError(username)}
            </View>
          </View>
          <View style={styles.field}>
            <TextInput
              secureTextEntry={true}
              {...password}
              placeholder="Password"
              style={styles.textInput}/>
            <View>
            {renderError(password)}
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.onSignIn}>
              <Text style={styles.button}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: '#2ecc71'
  },
  titleContainer: {
    padding: 10
  },
  title: {
    color: 'white',
    fontSize: 35,
    marginTop: 20,
    marginBottom: 20
  },
  field: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: 'white'
  },
  textInput: {
    height: 50
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    fontSize: 30,
    color: 'white'
  },
  formError: {
    color: 'red'
  }
});

var validate = (formProps) => {
  var errors = {};
  if (!formProps.username) {
    errors.username = "Please enter an username.";
  }
  if (!formProps.password) {
    errors.password = "Please enter a password.";
  }
  return errors;
}

module.exports = reduxForm({
  form: 'login',
  fields: ['username', 'password'],
  validate: validate
}, null, null)(Login);
