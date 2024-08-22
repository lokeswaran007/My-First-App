import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const Username = 'LokeshM';
    const Password = 'Lokesh@321';

    if (username === Username && password === Password) {
      Alert.alert('Login Successful', 'Welcome, LokeshM!');
      // Navigate to the next screen or perform any action upon successful login
    } else {
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button 
      style={styles.input} 
      title="Login" 
      onPress={handleLogin} 
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius:10,
  },
  // button: { 
  //   height: 40,
  //   borderColor: '#ccc',
  //   borderWidth: 1,
  //   marginBottom: 20,
  //   paddingHorizontal: 10,
  //   borderRadius:10,
  // },
});

export default LoginScreen;