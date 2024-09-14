import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const BordoreauxFormScreen = () => {
  const [progress, setProgress] = useState(1); // Example progress (out of 10)
  const [documentType, setDocumentType] = useState('Facture');
  const [paymentMode, setPaymentMode] = useState('');
  const [documentRef, setDocumentRef] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [documentDate, setDocumentDate] = useState('');
  const [amount, setAmount] = useState('');

  const handleDocumentTypeChange = (type: any) => {
    setDocumentType(type);
  };

  const handlePaymentModeChange = (mode:any) => {
    setPaymentMode(mode);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>

      <View style={styles.container}>
        {/* Header Section */}
        {/* <View style={styles.header}>
          <Text style={styles.headerTitle}>Bordereau</Text>
          <Text style={styles.subHeader}>lorem is aurn upsetir loremium episium</Text>
        </View> */}

        {/* Progress Section */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>{progress}/10 left to complete</Text>
          <Text style={styles.amountText}>50,000,000</Text>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: `${(progress / 10) * 100}%` }]} />
          </View>
          <Text style={styles.smallText}>10,000,000</Text>
        </View>

        {/* Document Type Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Type of document</Text>
          <View style={styles.documentTypeContainer}>
            <TouchableOpacity
              style={[styles.documentTypeButton, documentType === 'Facture' && styles.activeButton]}
              onPress={() => handleDocumentTypeChange('Facture')}
            >
              <Text style={styles.buttonText}>Facture</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.documentTypeButton, documentType === 'Bon de commande' && styles.activeButton]}
              onPress={() => handleDocumentTypeChange('Bon de commande')}
            >
              <Text style={styles.buttonText}>Bon de commande</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.documentTypeButton, documentType === 'Marche' && styles.activeButton]}
              onPress={() => handleDocumentTypeChange('Marche')}
            >
              <Text style={styles.buttonText}>Marche</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Section */}
        <View style={styles.section}>
          <TextInput
            style={styles.input}
            placeholder="Document Ref"
            value={documentRef}
            onChangeText={setDocumentRef}
          />
          <TextInput
            style={styles.input}
            placeholder="Due Date"
            value={dueDate}
            onChangeText={setDueDate}
          />
          <TextInput
            style={styles.input}
            placeholder="Document Date"
            value={documentDate}
            onChangeText={setDocumentDate}
          />
          <TextInput
            style={styles.input}
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
        </View>

        {/* Payment Mode Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mode of Payment</Text>
          <View style={styles.paymentModeContainer}>
            <TouchableOpacity
              style={[styles.paymentModeButton, paymentMode === 'Traite' && styles.activeButton]}
              onPress={() => handlePaymentModeChange('Traite')}
            >
              <Text style={styles.buttonText}>Traite</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.paymentModeButton, paymentMode === 'Virement' && styles.activeButton]}
              onPress={() => handlePaymentModeChange('Virement')}
            >
              <Text style={styles.buttonText}>Virement</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.paymentModeButton, paymentMode === 'Cheque' && styles.activeButton]}
              onPress={() => handlePaymentModeChange('Cheque')}
            >
              <Text style={styles.buttonText}>Cheque</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 110,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subHeader: {
    fontSize: 14,
    color: '#ddd',
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    color: '#333',
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginVertical: 10,
  },
  progressBarFill: {
    height: 10,
    backgroundColor: '#4caf50',
    borderRadius: 5,
  },
  smallText: {
    fontSize: 12,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  documentTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  documentTypeButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
  },
  paymentModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  paymentModeButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#4caf50',
  },
  buttonText: {
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BordoreauxFormScreen;
