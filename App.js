import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
//import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { Container, Text,Button, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './pages/home-page/HomePage';
import NewNotePage from './pages/new-note-page/NewNotePage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  const [isReady, setIsReady] = useState(false)

  useEffect(() => {

    // สั่งให้ Load font เพื่อใช้งานใน UI Component ที่สร้างด้วย Native base
    let loadFont = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });

      // ตั้งค่า State ใหม่ เพื่อให้ App component ทำการ render ตัวเองอีกครั้ง
      setIsReady(true)
    }

    // เริ่มการ load font
    loadFont();
  }, [])

  if (!isReady) {
    return (
      <AppLoading />
    )
  }

  return (
    <NavigationContainer>
      {/* กำหนด Stack */}
      <Stack.Navigator>
        {/* กำหนดหน้าแอพแรก ชื่อว่า Home และเลือก component HomePage เป็นตัว User Interface */}
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerTitle: <Text>Home</Text>,
            headerRight: () => (
              <Button transparent>
                <Icon name='add' />
              </Button>
            ),
          }}
        />
        <Stack.Screen name="CreateNote" component={NewNotePage}
          options={{ title: 'New Note' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
