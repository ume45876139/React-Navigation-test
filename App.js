import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './MainStackNavigator';

export default function App() {
  return(
    <MainStackNavigator />
  );
}
