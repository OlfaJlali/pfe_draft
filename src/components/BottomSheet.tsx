import { View, Pressable, TouchableOpacity, StyleSheet, Dimensions, Animated, Text } from 'react-native';
import { icons } from 'lucide-react-native';
import { IconProp, TabsNavigatorProps } from '../types/BottomSheetTypes';
import { useRef, useState } from 'react';

const { width } = Dimensions.get('window');

function Icon({ color, size = 16, name, ...rest }: IconProp) {
  const IconComponent = icons[name];
  return <IconComponent color={color} size={size} {...rest} />;
}

export function TabsNavigator({
  data,
  selectedIndex,
  onChange,
  activeBackgroundColor = '#1591ea',
  inactiveBackgroundColor = 'transparent',
  activeColor = '#fff',
  inactiveColor = '#ddd',
}: TabsNavigatorProps) {
  const rotation = useRef(new Animated.Value(0)).current;
  const [isExpanded, setIsExpanded] = useState(false); // State to track expansion

  // Animated values for the additional buttons and height
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const buttonTranslateY = useRef(new Animated.Value(20)).current; // Start below the visible area
  const containerHeight = useRef(new Animated.Value(100)).current; // Initial height

  const handlePress = () => {
    // Toggle the expanded state
    setIsExpanded(prev => !prev);

    const toValue = isExpanded ? 100 : 140; // Change height based on state
    const rotationValue = isExpanded ? 0 : 1; // Rotate when expanded

    // Animate rotation
    Animated.timing(rotation, {
      toValue: rotationValue, // Rotate 90 degrees or back
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Animate container height
    Animated.timing(containerHeight, {
      toValue, // Toggle container height
      duration: 300,
      useNativeDriver: false, // Height animation cannot use native driver
    }).start();

    // Animate button appearance
    if (!isExpanded) {
      // If expanding, animate to visible state
      Animated.parallel([
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(buttonTranslateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // If collapsing, animate to hidden state
      Animated.parallel([
        Animated.timing(buttonOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(buttonTranslateY, {
          toValue: 20,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const rotateInterpolation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  return (
    <Animated.View style={[styles.container, { height: containerHeight }]}>
      <View style={styles.iconContainer}>
        {data.map((item, index) => {
          if (index === 2) return <View key={index} style={{ width: 100 }} />;
          return (
            <Pressable
              key={index}
              onPress={() => onChange(index)}
              style={[styles.navButton, selectedIndex === index ? styles.navButtonSelected : '']}
            >
              <Icon name={item.icon} size={24} color={selectedIndex === index ? activeColor : /* '#3E77BC' */ '#282534'} />
            </Pressable>
          );
        })}
      </View>

      {/* Render additional buttons when expanded */}
      <Animated.View
        style={[
          styles.additionalButtonsContainer,
          {
            opacity: buttonOpacity,
            transform: [{ translateY: buttonTranslateY }],
          },
        ]}
      >
        {Array.from({ length: 4 }, (_, index) => (
          <Pressable key={index} onPress={() => console.log(`Button ${index + 1} pressed`)}>
            <View style={styles.navButton}>
              <Icon name={'Database'} size={24} color={ '#282534' } />
            </View>
          </Pressable>
        ))}
      </Animated.View>

      <Animated.View style={[styles.fab , {top: -30}]}>
        <TouchableOpacity onPress={handlePress}>
          <Animated.Image
            source={require('../../assets/logo.png')}
            style={[
              styles.image,
              { transform: [{ rotate: rotateInterpolation }] },
            ]}
          />
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.5,
    elevation: 6,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  fab: {
    backgroundColor: '#FFF',
     width: 80,
    
    height: 80,
    borderRadius: 20,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  navButton: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth:0.2,
    borderColor: '#282534'
  },
  navButtonSelected: {
    backgroundColor: '#3E77BC',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  image: {
    width: 70,
    height: 70,
    
  },
  additionalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
  },
  additionalButton: {
    backgroundColor: '#1591ea',
    width:50,
    height:50,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TabsNavigator;
