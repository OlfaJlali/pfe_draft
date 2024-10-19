import React from 'react';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import Slide from '../components/Slide';
import Footer from '../components/Footer';
import { useOnboarding } from '../hooks/useOnboarding';
import { SlideType } from '../types/onBoardingTypes';
const slides: SlideType[] = [
  {
    id: '1',
    image: require('../../assets/men1.png'),
    title: 'Best Digital Solution',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    image: require('../../assets/men2.png'),
    title: 'Achieve Your Goals',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: require('../../assets/men3.png'),
    title: 'Increase Your Value',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];
const OnboardingScreen = ({ navigation }: { navigation: any }) => {
  const { currentSlideIndex, ref, updateCurrentSlideIndex, goToNextSlide, skip } = useOnboarding(slides);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor='#fff' />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: '75%'   , alignSelf:'center'}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer
        currentSlideIndex={currentSlideIndex}
        slides={slides}
        skip={skip}
        goToNextSlide={goToNextSlide}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
