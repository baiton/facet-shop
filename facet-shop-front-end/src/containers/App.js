import React, { Component } from 'react';
import '../styles/App.css';

import { Route, Switch, HashRouter } from 'react-router-dom'

import Home from "./Home"
import Store from "./Store"
import axios from "axios"

class App extends Component {
constructor(){
  super()
  this.state= {
    user: "",
    products: []
  }
}

  componentDidMount(){
      this._fetchProducts();
   }
   _fetchProducts = () => {
      axios.get('http://localhost:8080')
         .then(response => {
           this.setState({products: response.data})
            // id image name price quantity
         })
   }

  makeUser = (userInfo) => {
    this.setState({
        user: userInfo
    })
  }

  render() {
    return (
      <div className="h-w-100 App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={(props) => <Home {...props} {...this.state} makeUser={this.makeUser}/>}/>
            <Route exact path="/store" component={() => <Store {...this.state}/>} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
