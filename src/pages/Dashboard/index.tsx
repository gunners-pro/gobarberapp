import React from 'react';
import { View, Button, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button onPress={signOut} title="Sair" />
    </View>
  );
}

export default Dashboard;
