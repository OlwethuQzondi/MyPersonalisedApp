import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to My Personalized App!</Text>
      <Text style={styles.message}>Here are my hobbies/tasks for the day:</Text>
      <ScrollView>
        <Text style={styles.task}>1. Reading</Text>
        <Text style={styles.task}>2. Coding</Text>
        <Text style={styles.task}>3. Running</Text>
        <Text style={styles.task}>4. Cooking</Text>
        <Text style={styles.task}>5. Painting</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  message: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333',
  },
  task: {
    fontSize: 18,
    marginBottom: 5,
    color: '#555',
  },
});
