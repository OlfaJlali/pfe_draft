import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput, FlatList } from 'react-native';
import DatePicker from 'react-native-date-picker'
const { height } = Dimensions.get('window');

const BordoreauxScreen: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState('1000000000');
  const [selectedYear, setSelectedYear] = useState(2024);
  const flatListRef = useRef<FlatList<number>>(null);
  const [documentCount, setDocumentCount] = useState(0);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const incrementCount = () => setDocumentCount(prev => prev + 1);
  const decrementCount = () => setDocumentCount(prev => Math.max(0, prev - 1));
  const years = Array.from({ length: 21 }, (_, i) => selectedYear - 10 + i);

  useEffect(() => {
    const selectedYearIndex = years.findIndex((year) => year === selectedYear);
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: selectedYearIndex,
        animated: false,
        viewPosition: 0.5, // Center the item in the viewport
      });
    }
  }, [selectedYear]);

  const renderYear = ({ item }: { item: number }) => (
    <TouchableOpacity onPress={() => setSelectedYear(item)}>
      <Text style={[styles.yearText, item === selectedYear && styles.selectedYear]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
         
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
          <TouchableOpacity
          style={[styles.inputContainer]}
          onPress={()=>setOpen(true)}
        >
          <Text style={styles.label}>Bordereau date</Text>
          <Text style={styles.input}>{date.toDateString()}</Text>
          <DatePicker
           modal
           open={open}
           date={date}
           mode='date'
           onConfirm={(date) => {
             setOpen(false)
             setDate(date)
           }}
           onCancel={() => {
             setOpen(false)
           }}
          />
        </TouchableOpacity>
         


      {/* Bordereau Date and Documents Number Side by Side */}
      <View style={styles.horizontalContainer}>

             {/* Bordereau Year */}
      <View style={[styles.yearContainer,, styles.flexItem]}>
        <Text style={styles.label}>Bordereau year</Text>
        <FlatList
          ref={flatListRef}
          data={years}
          keyExtractor={(item) => item.toString()}
          renderItem={renderYear}
          contentContainerStyle={styles.yearSelector}
          showsVerticalScrollIndicator={false}
          getItemLayout={(data, index) => ({
            length: 50, // Height of each item
            offset: 50 * index, // Position of each item
            index,
          })}
          onScrollToIndexFailed={(info) => {
            console.error('Scroll to index failed', info);
          }}
        />
      </View>

        {/* Documents Number */}
        <View style={[styles.counterContainer, styles.flexItem]}>
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
      </View>

 

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={()=>console.log(date.toDateString() ,documentCount ,selectedYear ,totalAmount)}>
        <Text style={styles.saveButtonText} >Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingTop: 80
    
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  inputContainer: {
    backgroundColor: '#f0f4ff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  datePicker: {
    width: '100%',
  },
  flexItem: {
    flex: 1,
    marginHorizontal: 8, // Add some margin between the two items
  },
  label: {
    fontSize: 14,
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
    height: 200, // Adjust height as needed
  },
  yearSelector: {
    alignItems: 'center',
  },
  yearText: {
    color: '#999',
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  selectedYear: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
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
    paddingTop: 20
  },
  documentCount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  counterButton: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    borderRadius: 10,
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
