import React, {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem, 
    Button
} from 'reactstrap';

const Sitebar =(props) => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => {
    let newisOpen =!isOpen;
    setIsOpen(newIsOpen);
}
return (
    <Navbar color="faded" light expand ="md">
    <NavbarBrand href='/'>Workout Log</NavbarBrand>
    <NavbarToggler OnClick={toggle}/>
    <Collapse isOpen={isOpen} navbar>
  <Nav className="ml-auto" navbar>
  <NavItem>
  <Button onClick={props.clickLogout}>Logout</Button>
  </NavItem>
  </Nav>
  </Collapse>
  </Navbar>
)
}
export default Navbar;