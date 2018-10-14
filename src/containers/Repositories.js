import React from 'react';
import { FlatList, View, Linking, Text, Image } from 'react-native';
import RepositoryItem from '../components/RepositoryItem';
import Header from '../components/Header';
import styles from './RepositoriesStyles';
import dataAPI from '../data/products';

export default class Repositories extends React.Component {
  state = {
    query: 'products',
    data: dataAPI,
    cartVisible: false,
    cart: []

  };

  componentDidMount() {
    this.search('products');
  }

  search = (query) => {
    this.setState({ query });
  };

  onPressItem = (url) => {
    Linking.openURL(url);
  };

  submitCart = () => {
    
  }

  addToCart = (item) => {
    let newCart = this.state.cart;
    newCart.push(item)
    this.setState({
      cart: newCart
    })
  }

  render() {
    const { data, query } = this.state;
    return (
        <View style={styles.container}>
           <Header query={query} onSubmit={this.submitCart} />
           <FlatList
            data={data}
            renderItem={({ item }) => (
              <RepositoryItem
                name={item.title}
                description={item.body}
                price={item.price}
                id={item.id}
                avatarUrl={item.avatar}
                available={item.available}
                url={item.url}
                onPress={this.onPressItem}
                addToCart={this.addToCart}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />

        </View>
    );
  }
}
