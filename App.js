import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from './src/components/Header'

class App extends Component {
  render() {
    return (
      <View>
        <Header title="Product List" />
        <Text>Hello World</Text>
      </View>
    )
  }
}
export default App;
