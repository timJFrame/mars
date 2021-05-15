import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation(){
    return(
       <Navbar collapseOnSelect expand="true" bg="dark" variant="dark" style={{backgroundColor: '#253237'}}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mr-auto">
             <Nav.Link>About</Nav.Link>
             <Nav.Link>Photos</Nav.Link>
          </Nav>
         </Navbar.Collapse>

       </Navbar>
    )
}

export default Navigation