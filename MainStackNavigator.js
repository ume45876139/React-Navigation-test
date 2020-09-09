import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './components/Home';
import ProfileScreen from './components/Profile';

const Drawer = createDrawerNavigator();

const MainStackNavigator = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          option={{title: 'Welcome'}}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
