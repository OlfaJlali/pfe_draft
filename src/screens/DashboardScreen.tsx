import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import { useTabState } from '../hooks/useTabState';
import { DashboardScreenStyles } from '../styles/DashboardScreenStyles';
import { Tab } from '../components/Tab';
import { ListItem } from '../components/ListItem';
import CardsSliderItem from '../components/CardsSliderItem';
import Animated from 'react-native-reanimated';
import { CardsData } from '../data/Cards';
import { dashboardData } from '../data/Dashboard';
import { FilteredDataItem } from '../types/dashboardtypes';
import { useScrollHandler } from '../hooks/useScrollHandler';

const DashboardScreen = () => {
  const colorPalettes = [
    // ['#00BFFF', '#0056A6'], // First card colors
    ['#3E77BC', '#3E77BC'],
    
    ['#3E77BC', '#3E77BC'],

    ['#4275bc', '#3E77BC'],
    ['#5b8cff', '#4275b9'],   ['#1a3049', '#4b4f60'],
    ['#2c4e8e', '#1a3049'],
    // ['#4275b9', '#1a3049'], // Second card colors (darker blue)

    ['#87CEFA', '#4682B4'], // Second card colors (lighter shades)
    // Add more palettes as needed
  ];
  const { selectedTab, setSelectedTab } = useTabState<'available' | 'available2'>('available');
  const [filteredData, setFilteredData] = useState<FilteredDataItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollX, onScrollHandler, onMomentumScrollEnd } = useScrollHandler(setCurrentIndex);
  useEffect(() => {
    const contractNumber = CardsData[currentIndex]?.title;
    const dataSource = selectedTab === 'available' ? dashboardData.availabledata : dashboardData.available2data;
    const foundItem = dataSource.find(item => item.contractNumber === contractNumber);
    const updatedFilteredData = foundItem ? foundItem.data : [];
    setFilteredData(updatedFilteredData);
  }, [currentIndex, selectedTab]);

  const Separator = () => <View style={{ width: 10 }} />;

  return (
    <SafeAreaView style={DashboardScreenStyles.safeAreaContainer}>
      <View style={DashboardScreenStyles.cardContainer}>
        <Animated.FlatList
          data={CardsData}
          renderItem={({ item, index }) => (
            <CardsSliderItem
              item={item}
              index={index}
              scrollX={scrollX}
              />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          ItemSeparatorComponent={Separator}
          onScroll={onScrollHandler} 
          onMomentumScrollEnd={onMomentumScrollEnd}
          scrollEventThrottle={16}
        />
      </View>
      <View style={DashboardScreenStyles.tabContainer}>
        <Tab
          title="Available"
          isActive={selectedTab === 'available'}
          onPress={() => setSelectedTab('available')}
        />
        <Tab
          title="Available 2"
          isActive={selectedTab === 'available2'}
          onPress={() => setSelectedTab('available2')}
        />
      </View>
      <FlatList
      //FCFFFE
      
      style={{backgroundColor:'#FCFFFE', borderRadius:16, elevation: 5 }}
        data={filteredData}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default DashboardScreen;
