import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, ImageBackground, ScrollView , Modal} from 'react-native';
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  



  const mediums = ['Tamil   ', 'English'];
  
  const navigation = useNavigation();


  const validateMarks = (value) => {
    const numberValue = parseFloat(value);
    if (isNaN(numberValue) || numberValue < 0 || numberValue > 100) {
      return '';
    }
    return numberValue.toString();
  };

  const handleInputChange = (setter) => (value) => {
    setter(validateMarks(value));
  };


  const validateForm = () => {
    if (!name || !StudentId || !selectedClass || !tamil || !english || !maths || !science || !socialScience || !gender || selectedMediums.length === 0) {
      setAlertMessage('Please fill all required fields.');
      setIsModalVisible(true);
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
    const percentage = (totalMarks / 500) * 100;

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

  setName('');
  setStudentId('');
  setSelectedClass('');
  setTamil('');
  setEnglish('');
  setMaths('');
  setScience('');
  setSocialScience('');
  setGender('');
  setSelectedMediums([]);
    
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
      source={{ uri: 'https://i.pinimg.com/564x/28/b7/0b/28b70b90a416b28c27ca11dc71db18bb.jpg' }}
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
           onChangeText={handleInputChange(setTamil)}
          />
          <Text style={styles.label}>English:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={english}
            placeholder="Enter the Mark:"
            onChangeText={handleInputChange(setEnglish)}
          />
          <Text style={styles.label}>Maths:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={maths}
            placeholder="Enter the Mark:"
            onChangeText={handleInputChange(setMaths)}
          />
          <Text style={styles.label}>Science:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={science}
            placeholder="Enter the Mark:"
            onChangeText={handleInputChange(setScience)}
          />
          <Text style={styles.label}>Social Science:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={socialScience}
            placeholder="Enter the Mark:"
            onChangeText={handleInputChange(setSocialScience)}
          />

          <Text style={styles.label}>Medium:</Text>
          {mediums.map(renderCheckbox)}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
  visible={isModalVisible}
  transparent={true}
  animationType="fade"
  onRequestClose={() => setIsModalVisible(false)}
>
  <View style={styles.modalBackground}>
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Validation Error</Text>
      <Text style={styles.modalMessage}>{alertMessage}</Text>
      <TouchableOpacity
        style={styles.modalButton}
        onPress={() => setIsModalVisible(false)}
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
    flex: 1,
    padding: 16,
    borderRadius: 10,
    marginBottom: 50,
    marginTop: 50,
    backgroundColor: 'rgba(250, 250, 250,0.5)',
    marginLeft:15,
    marginRight:15,
    borderWidth:2,
    borderColor:'#ffffff',
    margin: 10,
    elevation:150,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center',
    marginTop: 10,
    fontStyle:'italic'
  },
  input: {
    height: 50,
    marginBottom: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    fontSize:16,
  },
  picker: {
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    marginBottom: 12,
  },
  label: {
    fontSize: 20,
    color: 'black',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
    borderColor:'rgb(51, 0, 255)',
  },
  radioButtonLabel: {
    fontSize: 18,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: 'rgba(33, 150, 243,0.9)',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    
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
    backgroundColor: 'rgba(33, 150, 243,0.9)' ,
  },
  checkboxTick: {
    color: '#FFFFFF',
    fontSize: 15,
    bottom:3,
  },
  checkboxLabel: {
    fontSize: 18,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'rgba(33, 150, 243,0.9)',
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegistrationScreen;