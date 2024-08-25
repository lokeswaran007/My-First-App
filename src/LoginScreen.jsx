import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity, ScrollView,ImageBackground,FontFamily } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';




const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const Username = 'Loki';
    const Password = '123';

    if (username === Username && password === Password) {
      Alert.alert('Login Successful', 'Welcome, LokeshM!', [
        {

          onPress: () => navigation.navigate('Registration', { userName: username }),
        },
      ]);
    } else {
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };


return (
  
    <ImageBackground 
      source={{ uri:'https://i.pinimg.com/564x/4a/77/b1/4a77b10b0798a7e451bb834b7e629ac0.jpg'}}
      style={styles.backgroundImage}>
   
      <View  style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Icon name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
     </View>
     
     </ImageBackground>
     
   
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(250, 250, 250,0.8)',
    borderRadius: 15,
    margin:40,
    shadowColor:"blue",
    elevation:100,
    },
  title: {
    fontSize: 50,
    marginBottom: 30,
    textAlign: 'center',
    paddingTop:10,
    color: 'black',
  },
  inputContainer: {
    marginBottom: 20,
    
  },
  label: {
    fontSize: 17,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: 'rgba(250, 250, 250,0.9)',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  button: {
    backgroundColor:'rgb(33, 150, 243)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 33,
    marginBottom:30,
  },
  buttonText: {
    color:'#FFFFFF' ,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;