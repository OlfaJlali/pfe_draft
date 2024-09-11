import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

// Sample data
const availableData = [
  { id: '1', code: 'C', label: 'Current Invoices', amount: '4332,123', color: 'green' },
  { id: '2', code: 'G', label: 'Guarantee fund', amount: '9049,000', color: 'black' },
  { id: '3', code: 'R', label: 'Reserve fund', amount: '234,000', color: 'black' },
  { id: '4', code: 'O', label: 'Overshooting of buyer financing limits', amount: '3150,000', color: 'green' },

];

const available2Data = [
  { id: '1', code: 'X', label: 'Another Data 1', amount: '1000,000', color: 'black' },
  { id: '2', code: 'Y', label: 'Another Data 2', amount: '2000,000', color: 'black' },
];

const HomeScreen: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'available' | 'available2'>('available');

  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>{item.code}</Text>
      </View>
      <Text style={styles.itemLabel}>{item.label}</Text>
      <Text style={[styles.itemAmount, { color: item.color }]}>{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Cards */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Contract N°: 001/2024</Text>
          <Text style={styles.cardAmount}>138 516,647 TND</Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <Text style={styles.cardText}>Another Card Info</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'available' && styles.activeTab]}
          onPress={() => setSelectedTab('available')}
        >
          <Text style={styles.tabText}>Available</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'available2' && styles.activeTab]}
          onPress={() => setSelectedTab('available2')}
        >
          <Text style={styles.tabText}>Available 2</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={selectedTab === 'available' ? availableData : available2Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 10,
    marginRight: 8,
  },
  cardBlue: {
    backgroundColor: '#007bff',
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
  },
  cardAmount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },
  tabText: {
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  iconText: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
  },
  itemLabel: {
    flex: 1,
    fontSize: 16,
  },
  itemAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
