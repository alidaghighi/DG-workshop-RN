import React from 'react';
import { FlatList, View, Linking, Text, Image, TouchableOpacity } from 'react-native';
import RepositoryItem from '../components/RepositoryItem';
import Header from '../components/Header';
import styles from './RepositoriesStyles';
import dataAPI from '../data/products';

export default class Repositories extends React.Component {
  state = {
    query: 'products',
    data: dataAPI,
    cart: [{
      "number": 0,
      item: []
    }],
    cartVisibile: false

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
    this.setState({cartVisibile: true})
  }

  showCart = () => {
    this.state.map(({obj}) => {
      return(
        <View >
          <RepositoryItem
                  name={obj.item.title}
                  description={obj.item.body}
                  id={obj.item.id}
                  avatarUrl={obj.item.avatar}
                  available={obj.number}
                />
        </View>
      )
    })
  }

  addToCart = (item) => {
    let newCart = this.state.cart;
    newCart.map((obj) => {
      if(obj.item.indexOf(item) !== -1) {
        obj.item.push(item)
        obj.number += 1     
      }
      else {
        obj.number += 1
      }
    })
    this.setState({
      cart: newCart
    })
  }

  clearCart = () => {
    this.setState({
      cart: [{
        "number": 0,
        item: []
      }]
    })
  } 

  render() {
    const { data, query } = this.state;
    return (
        <View style={styles.container}>
           <Header query={query} onSubmit={this.submitCart} />
           {
             cartVisibile ? (
              <View style={{flexDirection="column", alignItems: 'center'}}>
                <View style={{flexDirection="row"}}>
                <Text>
                  CART
                </Text>
                <Image style={{height: 50, width:50}} source={require("../assets/cart.png")}/>
                </View>
                {this.showCart}
                <View>
                  <TouchableOpacity onPress={this.clearCart}>
                    <Text style={{colorV: 'red'}}>
                      خالی کردن سبد خرید
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{colorV: 'red'}}>
                      پرداخت
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
             ) :
             (
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
             )
           }
        </View>
    );
  }
}
