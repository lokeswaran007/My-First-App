import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity, ScrollView,ImageBackground, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';




const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  const handleLogin = () => {
    const Username = 'Oooo';
    const Password = 'Oooo';

    if (username === Username && password === Password) {
      Alert.alert('Login Successful', 'Welcome, LokeshM!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Registration', { userName: username }),
        },
      ]);
    } else {
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };


return (
  
    <ImageBackground 
      source={{ uri:'https://i.pinimg.com/736x/71/71/fe/7171fe7f9d4f4c956aecacb7003a3d72.jpg' }}

      
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 15,
    margin: 40,
    shadowColor:"darkgreen",
    elevation:30,
    },
  title: {
    fontSize: 50,
    marginBottom: 30,
    textAlign: 'center',
    paddingTop:10,
   
    
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: 'rgba(160, 173, 149,0.5)',
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
    backgroundColor: 'rgba(103, 199, 27,10)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;


























// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity, ScrollView,ImageBackground, } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';




// const LoginScreen = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
  

//   const handleLogin = () => {
//     const Username = 'Oooo';
//     const Password = 'Oooo';

//     if (username === Username && password === Password) {
//       Alert.alert('Login Successful', 'Welcome, LokeshM!', [
//         {
//           text: 'OK',
//           onPress: () => navigation.navigate('Registration', { userName: username }),
//         },
//       ]);
//     } else {
//       Alert.alert('Login Failed', 'Invalid username or password.');
//     }
//   };


// return (
  
//     <ImageBackground 
//       source={{ uri:'https://i.pinimg.com/736x/71/71/fe/7171fe7f9d4f4c956aecacb7003a3d72.jpg' }}

      
//       style={styles.backgroundImage}>
   
//       <View  style={styles.container}>
//         <Text style={styles.title}>Login</Text>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Username</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter your username"
//             value={username}
//             onChangeText={setUsername}
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Password</Text>
//           <View style={styles.passwordContainer}>
//             <TextInput
//               style={[styles.input, styles.passwordInput]}
//               placeholder="Enter your password"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!showPassword}
//             />
//             <TouchableOpacity
//               style={styles.eyeIcon}
//               onPress={() => setShowPassword(!showPassword)}
//             >
//               <Icon name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="#333" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={handleLogin}
//         >
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//      </View>
     
//      </ImageBackground>
     
   
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
  
    
//   },
//   container: {
//     // flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', 
//     borderRadius: 15,
//     margin: 40,
//     shadowColor:"darkgreen",
//     elevation:30,
//     },
//   title: {
//     fontSize: 50,
//     marginBottom: 30,
//     textAlign: 'center',
//     paddingTop:10,
   
    
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#333',
//   },
//   input: {
//     height: 40,
//     borderWidth: 2,
//     paddingHorizontal: 10,
//     borderRadius: 10,
//     borderColor: '#ccc',
//     backgroundColor: 'rgba(160, 173, 149,0.5)',
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   passwordInput: {
//     flex: 1,
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 10,
//     top: 10,
//   },
//   button: {
//     backgroundColor: 'rgba(103, 199, 27,10)',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;






















// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const LoginScreen = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = () => {
//     const Username = 'LokeshM';
//     const Password = 'Lokesh@321';

//     if (username === Username && password === Password) {
//       Alert.alert('Login Successful', 'Welcome, LokeshM!', [
//         {
//           // text: 'OK',
//           // onPress: () => navigation.navigate('Registration'),
//           onPress: () => navigation.navigate('Registration', { userName: username }), // Pass 
//         },
//       ]);
//     } else {
//       Alert.alert('Login Failed', 'Invalid username or password.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Username</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your username"
//           value={username}
//           onChangeText={setUsername}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Password</Text>
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={[styles.input, styles.passwordInput]}
//             placeholder="Enter your password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry={!showPassword}
//           />
//           <TouchableOpacity
//             style={styles.eyeIcon}
//             onPress={() => setShowPassword(!showPassword)}
//           >
//             <Icon name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="#333" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <Button
//         title="Login"
//         onPress={handleLogin}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#FFFFF',
//   },
//   title: {
//     fontSize: 50,
//     marginBottom: 40,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#333',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     borderRadius: 10,
//     backgroundColor: "#EEEEEE",
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   passwordInput: {
//     flex: 1,
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 10,
//     top: 10,
//   },
// });

// export default LoginScreen;





