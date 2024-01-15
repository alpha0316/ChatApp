import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';


const PrimaryButton = ({ onPress, title, backgroundColor , color }) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#E3BA14', 
    marginLeft: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height : 50,
    width : 370,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
