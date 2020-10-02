import React from 'react';
import { Col, Row } from 'reactstrap';
// Components
import { FeatContainer } from "./main";

export default function Features() {
  return (
    <FeatContainer>
      <Row>
        <Col
          className="featBox" 
          lg="4"
        >
          <i className="icon fas fa-graduation-cap fa-4x"></i>
          <h3>College societies.</h3>
          <p>we provide tshirts and hoodies according to their needs.</p>
        </Col>
        <Col
          className="featBox" 
          lg="4"
        >
          <i className="icon fas fa-check-circle fa-4x"></i>
          <h3>Quality assured.</h3>
          <p>
            our quality testing unit assures whether the product is upto the
            mark or not.
          </p>
        </Col>
        <Col
          className="featBox" 
          lg="4"
        >
          <i className="icon fas fa-hand-holding-heart fa-4x"></i>
          <h3>Guarantee.</h3>
          <p>
            after all those quality checks still,if any bear and tear issue
            happens while the shipment,No worries at all , we'll exchange it.
          </p>
        </Col>
      </Row>
    </FeatContainer>
  )
}
