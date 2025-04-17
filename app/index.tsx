import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to MyApp</Text>
        <Text style={styles.subtitle}>Join our community today</Text>
      </View>

      <View style={styles.buttonGroup}>
        <Link href="/(auth)/login" asChild>
          <Pressable style={[styles.button, styles.primaryButton]}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>
        </Link>
        
        <Link href="/(auth)/signup" asChild>
          <Pressable style={[styles.button, styles.secondaryButton]}>
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
        </Link>
        
        <Link href="/about" asChild>
          <Pressable style={styles.link}>
            <Text style={styles.linkText}>Learn More About Us</Text>
          </Pressable>
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
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'red',
  },
  buttonGroup: {
    width: '100%',
    maxWidth: 300,
    gap: 16,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  link: {
    padding: 12,
    alignItems: 'center',
  },
  linkText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
});