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
            src={props.src}
            style={{ margin: "0 auto" }}
          />
        </Col>
        <Col size="m-3">
          <h3>gender:{props.gender}</h3>
        </Col>
        <Col size="m-3">
          <h3>name:{props.name}</h3>
        </Col>

        <Col size="m-3">
          <h3>email:{props.email}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default EmployeeDetail;
