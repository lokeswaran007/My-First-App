
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/LoginScreen.jsx';
import RegistrationScreen from './src/RegistrationScreen.jsx';
import StudentDetail from './src/StudentDetails.jsx';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="StudentDetails" component={StudentDetail} />



        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'blue',
  },
});

export default App;




























// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import LoginScreen from './src/LoginScreen.jsx';
// import RegistrationScreen from './src/RegistrationScreen.jsx';
// // import GenderSelector from './src/GenderSelector.jsx';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Login">
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="Registration" component={RegistrationScreen} />
//           {/* <Stack.Screen name="Gender" component={GenderSelector} /> */}

//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;































// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import LoginScreen from './src/LoginScreen.jsx';
// import RegistrationScreen from './src/RegistrationScreen.jsx';
// import GenderSelecto from'./src/colculate.jsx';


// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
       
//       <RegistrationScreen/>
//       {/* <GenderSelecto/> */}
//       {/* <LoginScreen/> */}
//     </SafeAreaView>



//   );
// };








// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;