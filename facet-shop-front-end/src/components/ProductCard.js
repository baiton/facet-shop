import React, { Component } from 'react';
import '../styles/product-card.css';

export default class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      price: 0,
      quantity: ""
    }
}


  _handleSubmit = (event) => {
    event.preventDefault()
    // this.setState({
    //   name: {this.props.name},
    //   price: {this.props.price},
    // })
    // console.log('handling submit')
    this.props.addToCart(this.state)
    this.setState({quantity: ""})
  }

  _handleChange = (event) => {
    this.setState({
      quantity: event.target.value
    })
  // this.setState({inputVal: event.target.value})
  }

  componentDidMount(){
    this.setState({
      name: this.props.name,
      price: this.props.price,
      id: this.props.id
    })
  }

  render() {
    return (
      <div className="card p-4 col-3 m-3 d-flex flex-column align-items-center">
         <img className="gem-size" src={this.props.image} alt="Card"/>
          <div className="card-body">
            <h4 className="card-title product-name">{this.props.name}</h4>
            <p className="card-text">Price:  {this.props.price}</p>
            <form onSubmit={this._handleSubmit}>
              <input value={this.state.quantity} type="number" className="form-control" onChange={this._handleChange} placeholder="quantity"/>
              <button className="btn btn-secondary m-2" type="submit" onClick={this._handleSubmit}> Add to cart</button>
            </form>
          </div>
      </div>
    );
  }
}
