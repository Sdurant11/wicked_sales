import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const textStyle = {
    color: 'black'
  };

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand id="title" href="/">
          <Link style={textStyle} to="/">
          Wicked Sales
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="px-5 mx-auto my-auto pointer">
              <Link style={textStyle} to="/headwear">
              Headwear
              </Link>
            </NavItem>
            <NavItem className="px-5 mx-auto my-auto pointer">
              <Link style={textStyle} to="/accessories">
              Accessories
              </Link>
            </NavItem>
            <NavItem className="px-5 mx-auto my-auto pointer">
              <Link style={textStyle} to="/clothing">
              Clothing
              </Link>
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
