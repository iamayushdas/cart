import React from 'react';
import {
  Button, Card, CardBody, CardHeader,
  CardText, CardTitle, Col,
  Row
} from 'reactstrap';
// Components
import { PricesContainer } from './main';

export default function Prices() {
  return (
    <PricesContainer id="pricing">
      <h2>Choose, Order & Pay</h2>
      <p>You can choose the following types of products we provide.</p>

      <Row>
        <Col 
          className="priceDetails" 
          lg="4" 
          md="6"
        >
          <Card className="mainCard">
            <CardHeader><h3>T-shirts</h3></CardHeader>
            <CardBody>
              <CardTitle><h2>₹199</h2></CardTitle>
              <CardText>for 1 tshirt</CardText>
              <CardText>replacement in case of tear.</CardText>
              <Button>Explore</Button>
            </CardBody>
          </Card>
        </Col>
        <Col 
          className="priceDetails" 
          lg="4" 
          md="6"
        >
          <Card className="mainCard">
            <CardHeader><h3>College</h3></CardHeader>
            <CardBody>
              <CardTitle><h2>T-shirts and hoodies.</h2></CardTitle>
              <CardText>for societies</CardText>
              <CardText>for events</CardText>
              <Button>Details</Button>
            </CardBody>
          </Card>
        </Col>
        <Col 
          className="priceDetails" 
          lg="4" 
          md="6"
        >
          <Card className="mainCard">
            <CardHeader><h3>Binge-watch</h3></CardHeader>
            <CardBody>
              <CardTitle><h2>Webseries</h2></CardTitle>
              <CardText>Links for all popular series.</CardText>
              <CardText>Drive and mega links</CardText>
              <Button>Watch</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </PricesContainer>
  )
}
