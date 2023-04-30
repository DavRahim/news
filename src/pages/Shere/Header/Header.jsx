import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex bg-light align-items-center mb-4 p-2">
        <Button variant="danger">Latest</Button>
        <Marquee speed={50}>
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just
          some text. I can be a React component, multiple React components, or
          just some text.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
