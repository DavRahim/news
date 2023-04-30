import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
     const { user, logOut } = useContext(AuthContext);
     const handleLogOut = () =>{
       logOut()
        .then()
        .catch(error =>{
          console.log(error)
        })
     }
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                {/* <Nav.Link href="#features">Home</Nav.Link> */}
                <Link to="/">Home</Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav>
                {user && (
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                )}

                {user ? (
                  <Button onClick={handleLogOut} variant="secondary">LogOut</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default NavigationBar;