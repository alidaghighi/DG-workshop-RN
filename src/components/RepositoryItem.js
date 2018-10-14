import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from './Kit/Text';
import styles from './RepositoryItemStyles';

export default class RepositoryItem extends React.PureComponent {
  onPressLink = () => {
    this.props.onPress(this.props.url);
  };

  addToCart = () => {
    this.props.addToCart(this.props)
  }

  render() {
    const { 
      name,
      description,
      price,
      id,
      avatarUrl,
      available,
    } = this.props;

    return (
      <View
      style={styles.container}
      >
      <TouchableOpacity 
        onPress={this.onPressLink}>
        <Text type="title">
          {name}
          {id}
        </Text>
        <Text>
          {description}
        </Text>
        <View 
        style={styles.details}
        >
          <Text>
            available: {available}
          </Text>
          <Text>
            price: {price}
          </Text>
        </View>
      </TouchableOpacity>
      <View 
        style={styles.footer}
      >
          <Image style={styles.avatar} source={{ uri: avatarUrl }} />
          <TouchableOpacity 
          onPress={this.addToCart}
          >
          <Image style={styles.cart} source={require('../assets/cart.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
