import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, cardSectionStyle, textStyle } = styles;

    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
            <CardSection style={cardSectionStyle}>
                <Text style={textStyle}>{children}</Text>
            </CardSection>
            <CardSection>
                <Button onPress={onAccept}>Yes</Button>
                <Button onPress={onDecline}>No</Button>
            </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        lineHeight: 40,
        flex: 1,
        fontSize: 18,
        textAlign: 'center'
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        flex: 1,
        justifyContent: 'center',
        position: 'relative'
    }
};

export { Confirm };
