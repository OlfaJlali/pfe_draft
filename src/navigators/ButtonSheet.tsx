import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';

const { height } = Dimensions.get('window');

const ButtonSheet: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(height * 0.15)).current;

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.timing(animatedHeight, {
      toValue: expanded ? height * 0.15 : height * 0.5,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View style={[styles.bottomSheet, { height: animatedHeight }]}>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Bourderaux</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Accounts</Text>
        </TouchableOpacity>

        {/* Larger Button */}
        <TouchableOpacity style={styles.largeButton} onPress={toggleExpand}>
          <Text style={styles.buttonText}>Main</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cards</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Transfers</Text>
        </TouchableOpacity>
      </View>

      {/* Hidden buttons, shown when expanded */}
      {expanded && (
        <View style={styles.expandedContent}>
          <TouchableOpacity style={styles.smallButton}>
            <Text style={styles.buttonText}>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Text style={styles.buttonText}>Option 2</Text>
          </TouchableOpacity>
          {/* Add more buttons as needed */}
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  largeButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
  },
  expandedContent: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  smallButton: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
    borderRadius: 10,
  },
});

export default ButtonSheet;
