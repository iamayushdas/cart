import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { TopBar } from "./main";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <TopBar 
      dark   
      expand="lg" 
    >
      <i className="fas fa-user-secret fa-3x"></i>
      <Link className="mainLogo" to="/">
        Collcart
      </Link>
      <NavbarToggler onClick={handleOpen} style={{ outline: "none" }} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pricing">Pricing</NavLink>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/signlog">
              Sign Up & Log In
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </TopBar>
  )
}
