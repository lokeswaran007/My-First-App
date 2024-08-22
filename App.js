// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LoginScreen from './src/LoginScreen.jsx';
import RegistrationScreen from './src/RegistrationScreen.jsx';
import GenderSelecto from'./src/colculate.jsx';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
       
      <RegistrationScreen/>
      {/* <GenderSelecto/> */}
      {/* <LoginScreen/> */}
    </SafeAreaView>



  );
};








const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;