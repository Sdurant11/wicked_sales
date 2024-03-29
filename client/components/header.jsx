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
        <NavbarBrand id="title" href="/" tag={props => {
          return (<Link {...props} style={textStyle} to="/">
          Wicked Sales
          </Link>);
        }}>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="px-5 mx-auto my-auto pointer">
              <Link style={textStyle} to="/headwear" className="headerText">
              Headwear
              </Link>
            </NavItem>
            <NavItem className="px-5 mx-auto my-auto pointer">
              <Link style={textStyle} to="/accessories" className="headerText">
              Accessories
              </Link>
            </NavItem>
            <NavItem className="px-5 mx-auto my-auto pointer">
              <Link style={textStyle} to="/clothing" className="headerText">
              Clothing
              </Link>
            </NavItem>
            <NavItem className=" mx-auto pointer" id="cartNum">
              <Link style={textStyle} to="/cart">
                <i className="fas fa-shopping-cart m-1"></i>
                {props.cart.length}
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
