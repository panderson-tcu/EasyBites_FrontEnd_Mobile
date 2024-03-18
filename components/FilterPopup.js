import React, { useState } from 'react';
import { Modal, View, Text, Pressable, TextInput, ScrollView, StyleSheet } from 'react-native';
import styles from "./FilterPopupStyle";

const FilterPopup = ({ visible, onClose, onApply }) => {
  const [maxPrice, setMaxPrice] = useState('');
  const [maxCookTime, setMaxCookTime] = useState('');
  const [selectedProteins, setSelectedProteins] = useState([]);

  const toggleProtein = (protein) => {
    const updatedProteins = selectedProteins.includes(protein)
      ? selectedProteins.filter(p => p !== protein)
      : [...selectedProteins, protein];
    setSelectedProteins(updatedProteins);
  };

  const renderProteinButtons = () => {
    return ['Chicken', 'Beef', 'Pork', 'Turkey', 'Vegetarian', 'Seafood'].map(protein => (
      <Pressable
        key={protein}
        style={[styles.proteinButton, selectedProteins.includes(protein) && styles.selectedProteinButton]}
        onPress={() => toggleProtein(protein)}
      >
        <Text style={[styles.proteinButtonText, selectedProteins.includes(protein)]}>
          {protein}
        </Text>
      </Pressable>
    ));
  };

  const handleApply = () => {
    const filters = {
      maxPrice: parseFloat(maxPrice),
      maxCookTime: parseInt(maxCookTime),
      selectedProteins
    };
    onApply(filters);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Filter Recipes</Text>
          <Text style={styles.sectionTitle}>Set a Max Price</Text>
          <TextInput
            placeholder="Max Price"
            keyboardType="numeric"
            style={styles.inputField}
            value={maxPrice}
            onChangeText={setMaxPrice}
          />
          <Text style={styles.sectionTitle}>Set max Cook Time</Text>
          <TextInput
            placeholder="Max Cook Time (minutes)"
            keyboardType="numeric"
            style={styles.inputField}
            value={maxCookTime}
            onChangeText={setMaxCookTime}
          />
          <Text style={styles.sectionTitle}>Select Protein(s)</Text>
          <ScrollView style={styles.proteinContainer}>
            {renderProteinButtons()}
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Pressable onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable onPress={handleApply} style={styles.applyButton}>
              <Text style={[styles.buttonText, styles.applyButtonText]}>Apply</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#f2f1ed', 
//     padding: 20,
//     borderRadius: 10,
//     width: '90%',
//     height: '60%',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//     color: '#3E3A39',
//     marginBottom: 20,
//   },
//   inputField: {
//     marginBottom: 30,
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//     paddingBottom: 5,
//   },
//   sectionTitle: {
//     marginBottom: 5,
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   proteinContainer: {
//     maxHeight: "60%",
//     marginBottom: 10,
//   },
//   proteinButton: {
//     backgroundColor: '#D9D9D9',
//     paddingVertical: 10,
//     paddingHorizontal: 25,
//     borderRadius: 20,
//     marginRight: 10,
//     marginBottom: 10,
//   },
//   selectedProteinButton: {
//     backgroundColor: '#7B886B',
//   },
//   proteinButtonText: {
//     color: '#000',
//   },
//   selectedProteinButtonText: {
//     color: '#fff',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     marginTop: 10,
//   },
//   cancelButton: {
//     backgroundColor: '#ddd',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   applyButton: {
//     backgroundColor: '#7B886B',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#000',
//   },
//   applyButtonText: {
//     color: '#fff',
//   },
// });

export default FilterPopup;
