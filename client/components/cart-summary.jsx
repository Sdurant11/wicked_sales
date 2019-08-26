import React from 'react';

function CartSummaryItem(props) {
  var price = props.item.price;
  price = '$' + (price / 100).toFixed(2);
  return (
    <React.Fragment>
      <div className="col-sm">
        <img src={props.item.image} alt="item image" className="col itemImage mt-1"></img>
      </div>
      <div className="col font-weight-bold">
        {props.item.name}
        <div className="font-weight-light">
          {price}
        </div>
        <div className="font-weight-normal">
          {props.item.shortDescription}
        </div>
      </div>
    </React.Fragment>
  );
}

function CartSummary(props) {
  var totalPrice = 0;
  props.cartArray.forEach(function (item) {
    totalPrice += item.price;
  });
  totalPrice = '$' + (totalPrice / 100).toFixed(2);

  var allCartItems = props.cartArray.map(product =>
    <div className="cartItemRow row border border-secondary rounded my-2" key={product.id}>
      <CartSummaryItem item={product}/>
    </div>
  );
  return (
    <React.Fragment>
      <div className="container">
        <button type="button" className="btn btn-secondary btn-sm my-2"
          onClick={() => { props.view('catalog', {}); }}>Back to Catalog</button>
        <h2>Cart Summary</h2>
        {allCartItems}
        <div className="mt-2 d-inline-block mr-3">Item Total: {totalPrice}</div>
        <button type="button d-inline-block" className="btn btn-success"
          onClick={() => { props.view('checkout', {}); }}>
            Checkout
        </button>
      </div>
    </React.Fragment>
  );
}

export default CartSummary;
