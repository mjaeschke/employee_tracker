import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import API from "../utils/API";
class RandomAPI extends Component {
  state = {
    result: {},
    search: "",
  };
  componentDidMount() {
    this.getUsers(1);
  }
  getUsers = (size) => {
    API.getUsers(size)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6">
            <h1>Employee Directory</h1>
          </Col>
          <Col size="md-6">
            <SearchForm>
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            </SearchForm>
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
            <h5>picture</h5>
          </Col>
          <Col size="md-3">
            <h5>name</h5>
          </Col>
          <Col size="md-3">
            <h5>email</h5>
          </Col>
          <Col size="md-3">
            <h5>DoB</h5>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default RandomAPI;
