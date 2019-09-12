import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {styles} from './ListFormationsScreen.styles';
//import { ListFormationsComponentWrapper } from './ListFormationsComponent.styles';

class ListFormationsScreen extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render () {
    if (this.state.hasError) {
      return (
        <View style={styles.ListFormationsComponentWrapper}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return (
      <View style={styles.ListFormationsComponentWrapper}>
        <Text>Test content</Text>
      </View>
    );
  }
}

export default ListFormationsScreen;
