import { View, Text, Button } from 'react-native';
import { useAuth } from '../providers/AuthProvider';

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome {user?.email}!</Text>
      <Button title="Sign Out" onPress={logout} />
    </View>
  );
}