import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';
import { Link,router} from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    await login(email, password);
    router.replace('/home');
    try {
    } catch (error:any) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <TextInput 
        placeholder="Email" 
        value={email}
        autoCapitalize="none"
        onChangeText={setEmail}
        
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={handleLogin} />
      <Link href="/signup" asChild>
        <Button title="Create Account" />
      </Link>
    </View>
  );
}