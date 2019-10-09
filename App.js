import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './pages/home-page/HomePage';
import NewNotePage from './pages/new-note-page/NewNotePage';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import configureStore from "./redux/store";
import { Provider } from "react-redux";

const store = configureStore();

const AppNavigator = createStackNavigator({
  Home: { screen: HomePage },
  CreateNote: { screen: NewNotePage }
})

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}