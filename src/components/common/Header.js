// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a functional component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
  <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
  </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    elevation: 5
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export { Header };
