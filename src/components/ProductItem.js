import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Card from './Card'

class ProductItem extends Component {
    render() {
        return (
        <Card> 
            <Text>
                { this.props.product.name }
            </Text>
        </Card>  
        );
      }
    }

export default ProductItem