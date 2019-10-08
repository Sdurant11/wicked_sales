import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkoutForm';
import HeadWearList from './headwear-list';

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
    this.placeOrder = this.placeOrder.bind(this);
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

  placeOrder(customerInfo) {
    var customerInfoObj = {
      name: customerInfo.name,
      creditCard: customerInfo.creditCard,
      shippingAddress: customerInfo.shippingAddress,
      cart: this.state.cart
    };
    var req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customerInfoObj)
    };
    fetch('/api/orders.php', req)
      .then(res => res.json());

    this.setState({
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
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
    } else if (this.state.view.name === 'checkout') {
      viewedPage = <CheckoutForm onSubmit={this.placeOrder} view={this.setView}/>;
    } else if (this.state.view.name === 'headWear') {
      viewedPage = <HeadWearList view={this.setView} params={this.state.view.params} />;
    }

    return (
      <React.Fragment>
        <Header cart={this.state.cart} view={this.setView}/>
        {viewedPage}
      </React.Fragment>
    );
  }
}
