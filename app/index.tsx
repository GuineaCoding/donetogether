import { View, Text, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      
      <View style={styles.buttonContainer}>
        <Link href="/(auth)/login" asChild>
          <Button title="Sign In" color="#007AFF" />
        </Link>
        
        <Link href="/(auth)/signup" asChild>
          <Button title="Sign Up" color="#34C759" />
        </Link>
        
        <Link href="/about" asChild>
          <Button title="About" color="#5856D6" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40
  },
  buttonContainer: {
    width: '80%',
    gap: 15
  }
});