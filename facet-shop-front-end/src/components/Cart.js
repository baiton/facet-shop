import React, {Component} from 'react'
import "../styles/Cart.css"
import CartItem from "./CartItem"

export default class Cart extends Component {
  constructor(){
    super()
  }

  _handleEmptyCart= (event) => {
    event.preventDefault();
    this.props.emptyCart();
  }

  render() {
    return (
      <div className="card col-8 mx-auto p-0 cart-header-bg shopping-cart">
        <div className="facet-bg card-header cart-header d-flex justify-content-start align-items-center">
          <i className="fa fa-shopping-cart fa-2x m-2"></i>
          <h3>Shopping Cart</h3>
        </div>
        <div className="item-catcher mx-auto col-10 p-5">
          <ul className="d-flex cart-list-fix m-1">
            <li className="container-fluid border-0 col-5">Product</li>
            <li className="container-fluid border-0 col-3">Price</li>
            <li className="container-fluid border-0 col-3">Quantity</li>
            <li className="container-fluid border-0 col-1"></li>
          </ul>
          {this.props.user.cart.map((cartItem) =>
          <CartItem
            key={cartItem.name}
            removeFromCart={this.props.removeFromCart}
            cartItem={cartItem}
          />
        )}
        </div>
        <div className="facet-bg d-flex flex-column align-items-end">
          <h3 className="m-3 mr-5">Total: {this.props.total}</h3>
          {/* link to balance due */}
          <button onClick={this._handleEmptyCart} className="btn hvr-radial-out-green btn-light m-3 mr-5">Empty Cart</button>
        </div>
      </div>
    )
  }
}
