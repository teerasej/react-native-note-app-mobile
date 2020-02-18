import React from 'react';
import 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import { Container, Text, Button, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './pages/home-page/HomePage';
import NewNotePage from './pages/new-note-page/NewNotePage';
import { Provider } from 'react-redux';
import createStore from "./redux/store";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const store = createStore();

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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage}
            options={(props) => {
              return {
                headerTitle: <Text>Home</Text>,
                headerRight: () => (
                  <Button transparent
                    onPress={() => props.navigation.navigate('CreateNote')}
                  >
                    <Icon name='add' />
                  </Button>
                ),
              }
            }}
          />
          <Stack.Screen name="CreateNote" component={NewNotePage} 
            options={{
              title: 'New Note'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }
}