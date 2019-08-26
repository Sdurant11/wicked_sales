import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';

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
    var viewedPage;
    if (this.state.view.name === 'catalog') {
      viewedPage = <ProductList view={this.setView} />;
    } else if (this.state.view.name === 'description') {
      viewedPage = <ProductDetails view={this.setView} params={this.state.view.params} add={this.addToCart} />;
    } else if (this.state.view.name === 'cart') {
      viewedPage = <CartSummary view={this.setView} cartArray={this.state.cart} />;
    }

    return (
      <React.Fragment>
        <Header cart={this.state.cart} view={this.setView}/>
        {viewedPage}
      </React.Fragment>
    );
  }
}
