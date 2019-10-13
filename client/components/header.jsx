import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand id="title" href="/">Wicked Sales</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="px-5 mx-auto my-auto pointer" onClick={() => { props.view('headWear', {}); }}>
              Headwear
            </NavItem>
            <NavItem className="px-5 mx-auto my-auto pointer" onClick={() => { props.view('accessories', {}); }}>
              Accessories
            </NavItem>
            <NavItem className="px-5 mx-auto my-auto pointer" onClick={() => { props.view('clothing', {}); }}>
              Clothing
            </NavItem>
            <NavItem className=" mx-auto pointer" id="cartNum">
              <i className="fas fa-shopping-cart m-1"
                onClick={() => { props.view('cart', {}); }}></i>
              {props.cart.length}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
