import React from 'react';
import { Row, Col, Button } from "reactstrap";
// Components
import { MainContainer } from './main';

export default function Main() {
  return (
    <MainContainer>
      <Row>
        <Col lg="6">
          <h1>Explore new and trendy getups & webseries</h1>
          <Button className="mainButton" outline size="lg">
            <i className="fab fa-apple"></i>
            Download
          </Button>
          <Button className="mainButton" size="lg">
            <i className="fab fa-google-play"></i>
            Download
          </Button>
        </Col>
        <Col lg="6">
          <img 
            className="mainImage" 
            src="/images/iPhone.png" 
            alt="iPhone"
          />
        </Col>
      </Row>
    </MainContainer>
  )
}
