import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = ({ route }) => {
  const { userName } = route.params || {}; 

  const [name, setName] = useState(userName || ''); 
  const [StudentId, setStudentId] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [tamil, setTamil] = useState('');
  const [english, setEnglish] = useState('');
  const [maths, setMaths] = useState('');
  const [science, setScience] = useState('');
  const [socialScience, setSocialScience] = useState('');
  const [gender, setGender] = useState('');
  const [selectedMediums, setSelectedMediums] = useState([]);

  const mediums = ['Tamil   ', 'English'];
  
  const navigation = useNavigation();

  const validateForm = () => {
    // Check if any field is empty
    if (!name || !StudentId || !selectedClass || !tamil || !english || !maths || !science || !socialScience || !gender || selectedMediums.length === 0) {
      Alert.alert('Validation Error', 'Please fill all required fields.');
      return false;
    }
    return true;
  };

  const calculateResults = () => {
    const tamilMarks = parseFloat(tamil) || 0;
    const englishMarks = parseFloat(english) || 0;
    const mathsMarks = parseFloat(maths) || 0;
    const scienceMarks = parseFloat(science) || 0;
    const socialScienceMarks = parseFloat(socialScience) || 0;

    const totalMarks = tamilMarks + englishMarks + mathsMarks + scienceMarks + socialScienceMarks;
    const percentage = (totalMarks / 500) * 100; // Assuming total marks are 500

    return { totalMarks, percentage };
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const { totalMarks, percentage } = calculateResults();
    navigation.navigate('StudentDetails', {
      student: {
        name,
        StudentId,
        selectedClass,
        tamil: parseFloat(tamil) || 0,
        english: parseFloat(english) || 0,
        maths: parseFloat(maths) || 0,
        science: parseFloat(science) || 0,
        socialScience: parseFloat(socialScience) || 0,
        totalMarks
      }
    });
    // Alert.alert(`Total Marks: ${totalMarks}\nPercentage: ${percentage.toFixed(2)}%`);
  };

  const toggleMedium = (medium) => {
    setSelectedMediums((prev) => 
      prev.includes(medium) 
        ? prev.filter(item => item !== medium) 
        : [...prev, medium]
    );
  };

  const renderCheckbox = (medium) => (
    <TouchableOpacity
      key={medium}
      style={styles.checkboxContainer}
      onPress={() => toggleMedium(medium)}
    >
      <View style={[styles.checkbox, selectedMediums.includes(medium) && styles.checkboxChecked]}>
        {selectedMediums.includes(medium) && (
          <Text style={styles.checkboxTick}>✓</Text>
        )}
      </View>
      <Text style={styles.checkboxLabel}>{medium}</Text>
    </TouchableOpacity>
  );

  const renderRadioButton = (label, value) => (
    <TouchableOpacity
      style={styles.radioButtonContainer}
      onPress={() => setGender(value)}
    >
      <View style={[styles.radioButton, gender === value && styles.radioButtonSelected]} />
      <Text style={styles.radioButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/564x/8b/ce/1e/8bce1e4d81426249a606b66c7ca626d7.jpg' }}
      style={styles.backgroundImage}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Student Registration</Text>

          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the name:"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.label}>Student Id:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the Student Id:"
            value={StudentId}
            onChangeText={setStudentId}
          />

          <Text style={styles.label}>Gender:</Text>
          {renderRadioButton('Male    ', 'Male')}
          {renderRadioButton('Female', 'Female')}

          <Text style={styles.label}>Class:</Text>
          <Picker
            selectedValue={selectedClass}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedClass(itemValue)}
          >
            <Picker.Item label="Select Class" value="" />
            <Picker.Item label="6th" value="6th" />
            <Picker.Item label="7th" value="7th" />
            <Picker.Item label="8th" value="8th" />
            <Picker.Item label="9th" value="9th" />
            <Picker.Item label="10th" value="10th" />
          </Picker>
          <Text style={styles.label}>Tamil:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={tamil}
            placeholder="Enter the Mark:"
            onChangeText={setTamil}
          />
          <Text style={styles.label}>English:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={english}
            placeholder="Enter the Mark:"
            onChangeText={setEnglish}
          />
          <Text style={styles.label}>Maths:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={maths}
            placeholder="Enter the Mark:"
            onChangeText={setMaths}
          />
          <Text style={styles.label}>Science:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={science}
            placeholder="Enter the Mark:"
            onChangeText={setScience}
          />
          <Text style={styles.label}>Social Science:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={socialScience}
            placeholder="Enter the Mark:"
            onChangeText={setSocialScience}
          />

          <Text style={styles.label}>Medium:</Text>
          {mediums.map(renderCheckbox)}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    flex: 1,
    padding: 16,
    borderRadius: 10,
    marginBottom: 50,
    marginTop: 50,
    backgroundColor: 'rgba(21, 22, 21,0.1)',
    // color:'#FFFFF',
    marginLeft:15,
    marginRight:15,
    borderWidth:3,
    borderColor:'#ffffff',
    margin: 10,
    elevation:80,
    // shadowColor:"#ffffff",
  },
  title: {
    fontSize: 35,
    marginBottom: 30,
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
  },
  input: {
    height: 50,
    // borderColor: 'gray',
    marginBottom: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    
  
  },
  picker: {
    // height: 30,
    // borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginBottom: 12,
    // borderWidth: 0.5,
  },
  label: {
    fontSize: 18,
    // color: '#ffffff',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding:15,
    borderRadius:10,
    marginRight:160,
    justifyContent:'space-evenly'
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 12,
    borderWidth: 4.5,
    borderColor: 'gray',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    // borderColor:'rgba(103, 199, 27,10)',
    borderColor:'blue',
  },
  radioButtonLabel: {
    fontSize: 18,
  },
  button: {
    // backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: 'rgba(21, 22, 21,0.9)',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    padding:15,
    borderRadius:10,
    justifyContent:'space-evenly',
    marginRight:160,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007BFF',
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  checkboxChecked: {
    backgroundColor: 'blue',
    // backgroundColor: 'rgba(103, 199, 27,10)',
  },
  checkboxTick: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  checkboxLabel: {
    fontSize: 18,
  },
});

export default RegistrationScreen;




























// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { useNavigation } from '@react-navigation/native';

// const RegistrationScreen = ({ route }) => {
//   const { userName } = route.params || {}; 

//   const [name, setName] = useState(userName || ''); 
//   const [StudentId, setStudentId] = useState('');
//   const [selectedClass, setSelectedClass] = useState('');
//   const [tamil, setTamil] = useState('');
//   const [english, setEnglish] = useState('');
//   const [maths, setMaths] = useState('');
//   const [science, setScience] = useState('');
//   const [socialScience, setSocialScience] = useState('');
//   const [gender, setGender] = useState('');
//   const [selectedMediums, setSelectedMediums] = useState([]);

//   const mediums = ['Tamil', 'English'];
  
//   const navigation = useNavigation();

//   const validateForm = () => {
//     // Check if any field is empty
//     if (!name || !StudentId || !selectedClass || !tamil || !english || !maths || !science || !socialScience || !gender || selectedMediums.length === 0) {
//       Alert.alert('Validation Error', 'Please fill all required fields.');
//       return false;
//     }
//     return true;
//   };

//   const calculateResults = () => {
//     const tamilMarks = parseFloat(tamil) || 0;
//     const englishMarks = parseFloat(english) || 0;
//     const mathsMarks = parseFloat(maths) || 0;
//     const scienceMarks = parseFloat(science) || 0;
//     const socialScienceMarks = parseFloat(socialScience) || 0;

//     const totalMarks = tamilMarks + englishMarks + mathsMarks + scienceMarks + socialScienceMarks;
//     const percentage = (totalMarks / 500) * 100; // Assuming total marks are 500

//     return { totalMarks, percentage };
//   };

//   const handleSubmit = () => {
//     if (!validateForm()) return;

//     const { totalMarks, percentage } = calculateResults();
//     navigation.navigate('StudentDetails', {
//       student: {
//         name,
//         StudentId,
//         selectedClass,
//         tamil: parseFloat(tamil) || 0,
//         english: parseFloat(english) || 0,
//         maths: parseFloat(maths) || 0,
//         science: parseFloat(science) || 0,
//         socialScience: parseFloat(socialScience) || 0,
//         totalMarks
//       }
//     });
//     // Alert.alert(`Total Marks: ${totalMarks}\nPercentage: ${percentage.toFixed(2)}%`);
//   };

//   const toggleMedium = (medium) => {
//     setSelectedMediums((prev) => 
//       prev.includes(medium) 
//         ? prev.filter(item => item !== medium) 
//         : [...prev, medium]
//     );
//   };

//   const renderCheckbox = (medium) => (
//     <TouchableOpacity
//       key={medium}
//       style={styles.checkboxContainer}
//       onPress={() => toggleMedium(medium)}
//     >
//       <View style={[styles.checkbox, selectedMediums.includes(medium) && styles.checkboxChecked]}>
//         {selectedMediums.includes(medium) && (
//           <Text style={styles.checkboxTick}>✓</Text>
//         )}
//       </View>
//       <Text style={styles.checkboxLabel}>{medium}</Text>
//     </TouchableOpacity>
//   );

//   const renderRadioButton = (label, value) => (
//     <TouchableOpacity
//       style={styles.radioButtonContainer}
//       onPress={() => setGender(value)}
//     >
//       <View style={[styles.radioButton, gender === value && styles.radioButtonSelected]} />
//       <Text style={styles.radioButtonLabel}>{label}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <ImageBackground 
//       source={{ uri: 'https://i.pinimg.com/736x/71/71/fe/7171fe7f9d4f4c956aecacb7003a3d72.jpg' }}
//       style={styles.backgroundImage}
//     >
//       <ScrollView>
//         <View style={styles.container}>
//           <Text style={styles.title}>Student Registration</Text>

//           <Text style={styles.label}>Name:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter the name:"
//             value={name}
//             onChangeText={setName}
//           />
//           <Text style={styles.label}>Student Id:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter the Student Id:"
//             value={StudentId}
//             onChangeText={setStudentId}
//           />

//           <Text style={styles.label}>Gender:</Text>
//           {renderRadioButton('Male', 'Male')}
//           {renderRadioButton('Female', 'Female')}

//           <Text style={styles.label}>Class:</Text>
//           <Picker
//             selectedValue={selectedClass}
//             style={styles.picker}
//             onValueChange={(itemValue) => setSelectedClass(itemValue)}
//           >
//             <Picker.Item label="Select Class" value="" />
//             <Picker.Item label="6th" value="6th" />
//             <Picker.Item label="7th" value="7th" />
//             <Picker.Item label="8th" value="8th" />
//             <Picker.Item label="9th" value="9th" />
//             <Picker.Item label="10th" value="10th" />
//           </Picker>
//           <Text style={styles.label}>Tamil:</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             value={tamil}
//             placeholder="Enter the Mark:"
//             onChangeText={setTamil}
//           />
//           <Text style={styles.label}>English:</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             value={english}
//             placeholder="Enter the Mark:"
//             onChangeText={setEnglish}
//           />
//           <Text style={styles.label}>Maths:</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             value={maths}
//             placeholder="Enter the Mark:"
//             onChangeText={setMaths}
//           />
//           <Text style={styles.label}>Science:</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             value={science}
//             placeholder="Enter the Mark:"
//             onChangeText={setScience}
//           />
//           <Text style={styles.label}>Social Science:</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             value={socialScience}
//             placeholder="Enter the Mark:"
//             onChangeText={setSocialScience}
//           />

//           <Text style={styles.label}>Medium:</Text>
//           {mediums.map(renderCheckbox)}

//           <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//             <Text style={styles.buttonText}>Submit</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover', // or 'stretch' depending on your preference
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//     borderRadius: 10,
//     marginBottom: 50,
//     marginTop: 50,
//     backgroundColor: 'rgba(255, 255, 255, 0.3)',
    
//     margin: 10,
//   },
//   title: {
//     fontSize: 35,
//     marginBottom: 30,
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     marginBottom: 12,
//     paddingHorizontal: 15,
//     borderRadius: 10,
//     backgroundColor: "#EEEEEE",
//     borderWidth: 0.5,
//   },
//   picker: {
//     height: 50,
//     borderColor: 'gray',
//     borderRadius: 10,
//     backgroundColor: "#EEEEEE",
//     marginBottom: 12,
//     borderWidth: 0.5,
//   },
//   label: {
//     fontSize: 18,
//   },
//   radioButtonContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   radioButton: {
//     width: 20,
//     height: 20,
//     borderRadius: 12,
//     borderWidth: 4.5,
//     borderColor: '#FFFFFF',
//     marginRight: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   radioButtonSelected: {
//     borderColor: '#00A36C',
//   },
//   radioButtonLabel: {
//     fontSize: 18,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 30,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 14,
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderRadius: 2,
//     borderWidth: 1,
//     borderColor: '#007BFF',
//     marginRight: 10,
//     backgroundColor: '#FFFFFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   checkboxChecked: {
//     backgroundColor: '#007BFF',
//   },
//   checkboxTick: {
//     color: '#FFFFFF',
//     fontSize: 16,
//   },
//   checkboxLabel: {
//     fontSize: 18,
//   },
// });

// export default RegistrationScreen;











