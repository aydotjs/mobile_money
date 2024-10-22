import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Default export for Whatever component
export default function Whatever() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Whats up</Text>
      <HomeScreen/>
    </View>
  );
}

// Named export for HomeScreen component
export function HomeScreen() {
  return <Text>What is going on here for God's sake</Text>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
