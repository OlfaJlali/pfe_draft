import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const BordoreauxScreen: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState('1000000000');
  const [bordereauDate, setBordereauDate] = useState('10/06/2020');
  const [selectedYear, setSelectedYear] = useState(2024);
  const [documentCount, setDocumentCount] = useState(0);

  const incrementCount = () => setDocumentCount(prev => prev + 1);
  const decrementCount = () => setDocumentCount(prev => Math.max(0, prev - 1));

  return (
    <View style={styles.container}>
      {/* Total Amount */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Total amount</Text>
        <TextInput
          style={styles.input}
          value={totalAmount}
          onChangeText={setTotalAmount}
          keyboardType="numeric"
        />
      </View>

      {/* Bordereau Date */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bordereau date</Text>
        <TextInput
          style={styles.input}
          value={bordereauDate}
          onChangeText={setBordereauDate}
          keyboardType="numeric"
        />
      </View>

      {/* Bordereau Year */}
      <View style={styles.yearContainer}>
        <Text style={styles.label}>Bordereau year</Text>
        <View style={styles.yearSelector}>
          <Text style={styles.yearText}>{selectedYear - 1}</Text>
          <Text style={styles.selectedYear}>{selectedYear}</Text>
          <Text style={styles.yearText}>{selectedYear + 1}</Text>
        </View>
      </View>

      {/* Documents Number */}
      <View style={styles.counterContainer}>
        <Text style={styles.label}>Documents number</Text>
        <View style={styles.counter}>
          <TouchableOpacity onPress={decrementCount} style={styles.counterButton}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.documentCount}>{documentCount}</Text>
          <TouchableOpacity onPress={incrementCount} style={styles.counterButton}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  inputContainer: {
    backgroundColor: '#f0f4ff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  yearContainer: {
    backgroundColor: '#f0f4ff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  yearSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  yearText: {
    color: '#999',
    fontSize: 18,
  },
  selectedYear: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  counterContainer: {
    backgroundColor: '#f0f4ff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  counterButton: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    borderRadius: 10,
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  documentCount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BordoreauxScreen;
