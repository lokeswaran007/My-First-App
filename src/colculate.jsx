// components/GenderSelector.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GenderSelector = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Gender:</Text>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => handleSelect('male')}
      >
        <View
          style={[
            styles.radioCircle,
            { borderColor: selectedGender === 'male' ? 'blue' : '#ccc' },
          ]}
        >
          {selectedGender === 'male' && <View style={styles.selectedRb} />}
        </View>
        <Text style={styles.optionText}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => handleSelect('female')}
      >
        <View
          style={[
            styles.radioCircle,
            { borderColor: selectedGender === 'female' ? 'blue' : '#ccc' },
          ]}
        >
          {selectedGender === 'female' && <View style={styles.selectedRb} />}
        </View>
        <Text style={styles.optionText}>Female</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        borderRadius:5,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
//   selectedRb: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: 'blue',
//   },
  optionText: {
    fontSize: 16,
  },
});

export default GenderSelector;
