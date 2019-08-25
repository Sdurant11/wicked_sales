import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(res => res.json())
      .then(res => this.setState({ cart: res }));
  }

  addToCart(product) {
    var req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch('/api/cart.php', req)
      .then(res => res.json())
      .then(res => {
        var itemsInCart = this.state.cart.concat(res);
        this.setState({ cart: itemsInCart });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Header cart={this.state.cart}/>
        {this.state.view.name === 'catalog' ? (
          <ProductList view={this.setView} />
        ) : (
          <ProductDetails view={this.setView} params={this.state.view.params} add={this.addToCart}/>
        )}
      </React.Fragment>
    );
  }
}
