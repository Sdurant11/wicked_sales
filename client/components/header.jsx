import React from 'react';

function Header(props) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light p-0">
        <h1 id="title" className="navbar-brand ml-5">Wicked Sales</h1>
        <div className="m-1" id="cartNum">
          <i className="fas fa-shopping-cart m-1"
            onClick={() => { props.view('cart', {}); }}></i>
          {props.cart.length}
        </div>

      </nav>

    </React.Fragment>
  );
}

export default Header;
