import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
