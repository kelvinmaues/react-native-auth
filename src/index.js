import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <CardSection>
          <Button
            onPress={() => firebase.auth().signOut()}
          >
            Log Out
          </Button>
        </CardSection>
      );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
          );
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}
