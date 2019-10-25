import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkoutForm';
import HeadWearList from './headwear-list';
import ClothingList from './clothing-list';
import AccessoriesList from './accessories-list';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppContext from './context';

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
    this.removeFromCart = this.removeFromCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
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

  updateCart(cartArray) {
    this.setState({ cart: cartArray });
  }

  removeFromCart(item) {
    var removedItemIndex = this.state.cart.indexOf(item);
    var cartArray = this.state.cart;
    cartArray.splice(removedItemIndex, 1);
    this.updateCart(cartArray);
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
    var contextVal = {
      addToCart: this.addToCart,
      cartArray: this.state.cart,
      placeOrder: this.placeOrder,
      removeFromCart: this.removeFromCart
    };

    return (
      <AppContext.Provider value={contextVal}>
        <React.Fragment>

          <Router>
            <Header cart={this.state.cart} />
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/products/:id" component={ProductDetails} />
              <Route path="/headwear" component={HeadWearList} />
              <Route path = "/accessories" component={AccessoriesList} />
              <Route path = "/clothing" component = {ClothingList} />
              <Route path = "/cart" component={CartSummary} />
              <Route path = "/checkout" component={CheckoutForm} />
            </Switch>

          </Router>

        </React.Fragment>
      </AppContext.Provider>
    );
  }
}
