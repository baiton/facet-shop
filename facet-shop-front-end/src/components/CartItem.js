import React, {Component} from 'react'


export default class CartItem extends Component {
constructor(){
  super()
}

_handleTrash = (event) => {
  event.preventDefault();
  this.props.removeFromCart(this.props.cartItem)
}


  render() {
    return (
      <div>
        <hr className="separator-line"/>
        <ul className="d-flex cart-list-fix m-1">
          <li className="container-fluid border-0 col-5">{this.props.cartItem.name}</li>
          <li className="container-fluid border-0 col-3">{this.props.cartItem.price}</li>
          <li className="container-fluid border-0 col-3">{this.props.cartItem.quantity}</li>
          <div className="hvr-radial-out d-flex mx-auto rounded">
          <i onClick={this._handleTrash} className="fa fa-trash-o container-fluid m-0 p-2 border-0 col-1"></i>
          </div>
        </ul>
      </div>
    )
  }
}
