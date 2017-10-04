// ListItem.js

import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

    render() {
        const { name } = this.props.employee;

        return (
          <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
            <View>
              <CardSection>
                  <Text style={styles.nameStyle}>
                      { name }
                  </Text>
              </CardSection>
            </View>
          </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    nameStyle: {
        color: '#44bde5',
        fontSize: 18,
        paddingLeft: 20
    }
};

export default ListItem;
