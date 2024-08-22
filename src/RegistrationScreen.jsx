// src/screens/RegistrationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity,Alert} from 'react-native';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [StudentId, setStudentId] = useState('');
  const [Class, setClass] = useState('');
  const [tamil, setTamil] = useState('');
  const [english, setEnglish] = useState('');
  const [maths, setMaths] = useState('');
  const [science, setScience] = useState('');
  const [socialScience, setSocialScience] = useState('');
//   const [selectedGender, setSelectedGender] = useState(null);



// const handleSelect = (gender) => {
//     setSelectedGender(gender);

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
  
  const { totalMarks, percentage } = calculateResults();
  alert(`Total Marks: ${totalMarks}\nPercentage: ${percentage.toFixed(2)}% `);
  
};
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Registration</Text>

      <TextInput
        style={styles.input}
        placeholder="Name :"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Student Id :"
        value={StudentId}
        onChangeText={setStudentId}
      />

      <TextInput
        style={styles.input}
        placeholder="Class :"
        value={Class}
        
        onChangeText={setClass}
      />
       <Text style={styles.label}>Tamil:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={tamil}
        placeholder="Enter the Mark :"
        onChangeText={setTamil}
      />
      <Text style={styles.label}>English:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={english}
        placeholder="Enter the Mark :"
        onChangeText={setEnglish}
      />
      <Text style={styles.label}>Maths:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={maths}
        placeholder="Enter the Mark :"
        onChangeText={setMaths}
      />
       <Text style={styles.label}>Science:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={science}
        placeholder="Enter the Mark :"
        onChangeText={setScience}
      />
       <Text style={styles.label}>Social Science:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={socialScience}
        placeholder="Enter the Mark :"
        onChangeText={setSocialScience}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

// return (
//   <View style={styles.containerlo}>
//     <Text style={styles.label}>Select Gender:</Text>
//     <TouchableOpacity
//       style={styles.optionContainer}
//       onPress={() => handleSelect('male')}
//     >
//       <View
//         style={[
//           styles.radioCircle,
//           { borderColor: selectedGender === 'male' ? 'blue' : '#ccc' },
//         ]}
//       >
//         {selectedGender === 'male' && <View style={styles.selectedRb} />}
//       </View>
//       <Text style={styles.optionText}>Male</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.optionContainer}
//       onPress={() => handleSelect('female')}
//     >
//       <View
//         style={[
//           styles.radioCircle,
//           { borderColor: selectedGender === 'female' ? 'blue' : '#ccc' },
//         ]}
//       >
//         {selectedGender === 'female' && <View style={styles.selectedRb} />}
//       </View>
//       <Text style={styles.optionText}>Female</Text>
//     </TouchableOpacity>
//   </View>
// );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    borderRadius:5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius:10,
  },
//     containerlo: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 16,
//         borderRadius:5,
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   radioCircle: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 5,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     marginRight: 10,
//   },
// //   selectedRb: {
// //     width: 12,
// //     height: 12,
// //     borderRadius: 6,
// //     backgroundColor: 'blue',
// //   },
//   optionText: {
//     fontSize: 16,
//   },
 
});



export default RegistrationScreen;
