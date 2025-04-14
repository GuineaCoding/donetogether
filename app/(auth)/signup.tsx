import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';
import { router } from 'expo-router';

export default function SignupScreen() {
  const { user, signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  if (user) {
    router.replace('/home'); // Changed from '/' to '/home'
    return null;
  }

  const handleSignup = async () => {
    setLoading(true);
    try {
      await signup(email, password);
      router.replace('/home'); // Redirect after successful signup
    } catch (error) {
      let errorMessage = 'Signup failed. Please try again.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      Alert.alert('Error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button 
        title={loading ? "Creating Account..." : "Sign Up"} 
        onPress={handleSignup} 
        disabled={loading}
      />
    </View>
  );
}