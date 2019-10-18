import React from 'react';
import AppContext from './context';
import { Link } from 'react-router-dom';

function CartSummaryItem(props) {
  var price = props.item.price;
  price = '$' + (price / 100).toFixed(2);
  return (
    <AppContext.Consumer>
      {contextValue => {
        return (
          <React.Fragment>
            <div>
              <img src={props.item.image} alt="item image" className="col itemImage mt-1"></img>
            </div>
            <div className="mx-auto my-auto">
              <div className="font-weight-bold">
                {props.item.name}
                <div className="font-weight-light">
                  {price}
                </div>
                <div className="mr-2 my-auto">
                  <button type="button" className="btn btn-danger" onClick={() => { contextValue.removeFromCart(props.item); }}>Delete Item</button>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }}
    </AppContext.Consumer>
  );
}

function CartSummary(props) {
  return (
    <AppContext.Consumer>
      {contextValue => {
        var totalPrice = 0;
        contextValue.cartArray.forEach(function (item) {
          totalPrice += item.price;
        });
        totalPrice = '$' + (totalPrice / 100).toFixed(2);

        var allCartItems = contextValue.cartArray.map(product =>
          <div className="cartItemRow row border border-secondary rounded my-2 d-flex" key={product.id}>
            <CartSummaryItem item={product} />
          </div>
        );
        return (
          <React.Fragment>
            <div className="container">
              <h3>Cart Summary</h3>
              {allCartItems}
              <div className="mt-2 d-inline-block mr-3">Item Total: {totalPrice}</div>
              <Link to="/checkout">
                <button type="button d-inline-block" className="btn btn-success">
                Checkout
                </button>
              </Link>
            </div>
          </React.Fragment>
        );
      }}
    </AppContext.Consumer>
  );
}

export default CartSummary;
