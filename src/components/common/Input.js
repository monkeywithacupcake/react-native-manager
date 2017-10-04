// TextInput.js

import React from 'react';
import { TextInput, Text, View } from 'react-native';

// create component
const Input = ({ label, value, onChangeText, placeholder, secure }) => {
    const { labelStyle, containerStyle, inputStyle } = styles;
    return (
        <View style={containerStyle}>
          <Text style={labelStyle}> { label } </Text>
          <TextInput 
            secureTextEntry = { secure }
            placeholder = { placeholder }
            autoCorrect = { false }
            style = { inputStyle }
            value = { value }
            onChangeText = { onChangeText }
          />
        </View>
    );
};

const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        color: "#706C61",
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    labelStyle: {
        color: "#E5446D",
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
};


export { Input };