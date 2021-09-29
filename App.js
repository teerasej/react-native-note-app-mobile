import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
//import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { Container, Text, Button, Icon } from 'native-base';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './pages/home-page/HomePage';
import NewNotePage from './pages/new-note-page/NewNotePage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import configureStore from "./redux/store";
import { Provider } from "react-redux";

const store = configureStore();

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* กำหนด Stack */}
        <Stack.Navigator>
          {/* กำหนดหน้าแอพแรก ชื่อว่า Home และเลือก component HomePage เป็นตัว User Interface */}
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
            options={{ title: 'New Note' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
