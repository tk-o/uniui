import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@nx/ui-button-mobile'

export default function App() {
  return (
    <View style={styles.container}>
      <Text testID="heading">
        Welcome! Open up App.tsx to start working on your app!
      </Text>
      <Button>Let's go!</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
