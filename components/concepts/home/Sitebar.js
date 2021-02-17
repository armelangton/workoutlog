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
    const [isOpen, setIsopen] = useState(false);
    const toggle= () = !isOpen;
    setIsopen(newIsOpen);
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

export default Sitebar;
        
        
        
        
        
        <Sitebar clickLogout={clearToken} />
        
        
//         <Navbar color="faded" light expand = "md">
//         <NavbarBrand href="/">Workout Log</NavbarBrand>
//         <NavbarToggler onClick={toggle}/>
//         <Collape isOpen={isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//                 <NavItem>
//                     <Button onClick={props.clickLogout}>Logout</Button>
//                 </NavItem>
//             </Nav>
//         </Collape>
//         </Navbar>
//     )
// }
export default Sitebar;