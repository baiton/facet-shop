import React, {Component} from 'react'

import Cart from "../components/Cart"
import ProductList from "../components/ProductList"

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      item: {},
      user: {
        cart: []
      }
    }
  }
  addToCart = (productInfo) => {
    let newCart = this.state.user.cart.map(i => i);
    let existingItem = newCart.find((item) =>{
      if (item.id == productInfo.id){
        return true
      }
    })
    if(existingItem === undefined){
      newCart.push(productInfo)

    } else {
      let newQuantity = parseInt(existingItem.quantity)+ parseInt(productInfo.quantity)
      existingItem.quantity = newQuantity
      newCart = newCart.map(item => {
        if (item.id == productInfo.id){
          return existingItem
        } else {
          return item
        }
      })
    }
    this.setState({
      user: {
        cart: newCart
      }
    })
  }

  removeFromCart = (productInfo) => {
      let itemRemoved = this.state.user.cart.filter((cartItem) => {
    if (cartItem.id !== productInfo.id){
    return true
  } else {
    return false
  }
      })
    this.setState({
      user: {
        cart: itemRemoved
      }
    })
  }

  emptyCart = () => {
    this.setState({
      user: {
        cart: []
      }
    })
  }

  // componentDidMount(){
  //   let getTotal = () => {
  //     let cartTotal = 0;
  //     let cart = this.state.user.cart
  //     console.log("cart", cart);
  //     for (let i=0; i<cart.length; i++){
  //       cartTotal += (cart[i].price *cart[i].quantity)
  //     }
  //     parseInt(cartTotal)
  //     this.setState({total: cartTotal})
  //   }
  // }

  render() {
    return (
      <div className="main-facet-bg">
        <header className="App-header gem-header d-flex justify-content-center align-items-center">
          <h1 className="App-title facet-title">Facet</h1>
        </header>
        <Cart {...this.state} cartTotal={this.cartTotal} emptyCart={this.emptyCart} removeFromCart={this.removeFromCart}/>
        <ProductList {...this.state} products={this.props.products} addToCart={this.addToCart}/>
      </div>
    )
  }
}
