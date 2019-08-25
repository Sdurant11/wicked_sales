import React from 'react';

function Header(props) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <h1 id="title" className="navbar-brand ml-5">Wicked Sales</h1>
        <div className="m-1" id="cartNum">
          <i className="fas fa-shopping-cart m-1"></i>
          {props.cart.length}
        </div>

      </nav>

    </React.Fragment>
  );
}

export default Header;
