import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Modal,ImageBackground,FontFamily } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';




const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = () => {
    const Username = '';
    const Password = '';



  if (username === Username && password === Password) {
    setAlertMessage('Welcome, Lokesh!');
    setModalVisible(true);
    setUsername('');
    setPassword('');
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate('Registration', { userName: username });
    }, 800); 
  } else {
    setAlertMessage('Invalid username or password.');
    setModalVisible(true);
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



     <Modal
      transparent={true}
      visible={modalVisible}
      animationType="fade"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{alertMessage}</Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
     
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


  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    color: 'black',
  },
  modalButton: {
    backgroundColor: 'rgb(33, 150, 243)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;