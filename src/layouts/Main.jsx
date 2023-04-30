import React from "react";
import Header from "../pages/Shere/Header/Header";
import Footer from "../pages/Shere/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Shere/LeftNav/LeftNav";
import RightNav from "../pages/Shere/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shere/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <NavigationBar></NavigationBar>
        <Container>
          <Row>
            <Col lg={3}>
              <LeftNav></LeftNav>
            </Col>
            <Col lg={6}>
              <Outlet></Outlet>
            </Col>
            <Col lg={3}>
              <RightNav></RightNav>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
