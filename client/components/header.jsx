import React from 'react';

function Header(props) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light p-0">
        <h1 id="title" className="navbar-brand ml-5 pointer" onClick={() => { props.view('catalog', {}); }}>Wicked Sales</h1>
        <div className="pointer" onClick={() => { props.view('headWear', {}); }}>Headwear</div>
        <div className="pointer" onClick={() => { props.view('clothing', {}); }}>Clothing</div>
        <div className="pointer" onClick={() => { props.view('accessories', {}); }}>Accessories</div>
        <div className="m-1 pointer" id="cartNum">
          <i className="fas fa-shopping-cart m-1"
            onClick={() => { props.view('cart', {}); }}></i>
          {props.cart.length}
        </div>

      </nav>

    </React.Fragment>
  );
}

export default Header;
