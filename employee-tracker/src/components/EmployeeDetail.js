import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

function EmployeeDetail(props) {
  return (
    <Container>
      <Row>
        <Col size="m-3">
          <img
            alt={props.picture}
            className="img-fluid"
            src={props.picture}
            style={{ margin: "0 auto" }}
          />
        </Col>
        <Col size="md-3">
          <h5>gender: {props.gender}</h5>
        </Col>
        <Col size="md-3">
          <h5>
            name: {props.first}
            {props.last}
          </h5>
        </Col>

        <Col size="md-3">
          <h5>email: {props.email}</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default EmployeeDetail;
