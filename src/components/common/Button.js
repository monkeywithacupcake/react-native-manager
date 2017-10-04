//button.js

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// create component
// whenever button is pressed, it will do whatever is in the prop onPress!
const Button = ({ onPress, children }) => {
    const {buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity onPress={ onPress } style={buttonStyle}> 
          <Text style={textStyle}> 
              {children}
          </Text>
        </TouchableOpacity>
    );
};

const styles = {
  textStyle: {
      alignSelf: 'center',
      fontWeight: '600',
      fontSize: 16,
      color: "#2A2B2A",
      paddingTop: 10,
      paddingBottom: 10
  },
  buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#FF8966',    
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#2A2B2A",
      marginRight: 5,
      marginLeft: 5,
      marginTop: 10
      
  }  
};

export { Button };
