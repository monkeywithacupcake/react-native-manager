// Header.js child

// import
import React from 'react';
import { Text, View } from 'react-native';

// create component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style = {viewStyle}>
          <Text style={textStyle}> { props.headerText } </Text>
        </View>
    );
};
//const Header = () => {
//    const { textStyle, viewStyle } = styles;
//    return (
//        <View style = {viewStyle}>
//          <Text style={textStyle}> Albums! </Text>
//        </View>
//    );
//}
// create styles
const styles = {
    
    viewStyle: {
        backgroundColor: "#FF8966",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        paddingTop: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
        
    },
    textStyle: {
        fontSize: 20
    }
};

// make it available

export { Header };

