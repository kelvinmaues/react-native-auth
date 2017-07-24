import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyBU9cd6sZZclrBDBc7ktbvHmibj3WZxQu4',
        authDomain: 'auth-7a813.firebaseapp.com',
        databaseURL: 'https://auth-7a813.firebaseio.com',
        projectId: 'auth-7a813',
        storageBucket: 'auth-7a813.appspot.com',
        messagingSenderId: '1006241741585'
      });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}
