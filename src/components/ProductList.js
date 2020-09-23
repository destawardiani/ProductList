import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class ProductList extends Component {
    state = { 
        products: []
     }

     componentDidMount() {
        axios
            .get('https://simple-ecommerce-9999.herokuapp.com/api/v1/product')
            .then(({ data, status }) => {
                console.log('CODE: ' + data.code);
                console.log('DATA: ' + data.data);

                this.setState({ products: data.data })
            })
     }

     renderProducts() {
        return this.state.products.map(product => 
        <Text key={ product.id }>
            { product.name }
        </Text>
        )
    }

    render() {
      return (
        <View>
          { this.renderProducts() }
        </View>
      )
    }
  }
  export default ProductList;