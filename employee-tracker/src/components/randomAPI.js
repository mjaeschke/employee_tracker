import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";
class RandomAPI extends Component {
  state = {
    result: [],
    search: "",
  };
  componentDidMount() {
    API.getUsers().then((response) => {
      console.log(response);
      this.setState({
        result: response.data.results.map((emp, idx) => ({
          picture: emp.picture.thumbnail,
          gender: emp.gender,
          first: emp.name.first,
          last: emp.name.last,
          email: emp.email,
          key: idx,
        })),
      });
    });
  }

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
          <Col size="md-12">
            {this.state.result.map(
              ({ picture, gender, first, last, email, key }) => (
                <EmployeeDetail
                  picture={picture}
                  gender={gender}
                  first={first}
                  last={last}
                  email={email}
                  key={key}
                ></EmployeeDetail>
              )
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default RandomAPI;
