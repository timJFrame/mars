import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

function Navigation(){
    return(
       <Navbar collapseOnSelect expand="true" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mr-auto">
            <Link to="/" className="nav__link">Home</Link>
             <Link to="/about" className="nav__link">About</Link>
             <Link to ="/photos" className="nav__link">Photos</Link>
          </Nav>
         </Navbar.Collapse>

       </Navbar>
    )
}

export default Navigation