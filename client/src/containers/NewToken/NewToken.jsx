import React, { Component } from "react";
import axios from "axios";

class NewToken extends Component {
  state = {
    name: "",
    imgUrl: "",
    addr1: "",
    city: "",
    state: "",
    zip: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    console.log("Submit happened");
    e.preventDefault();
    axios.post("/api/tokens", this.state)
      .then((response) => {
        console.log("Response Data", response);
        // window.alert(response.data.message);
        this.props.history.push("/tokens");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col imput-field s12">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="name">Token Name</label>
              </div>
            

            
              <div className="col imput-field s12">
                <input
                  type="text"
                  id="imgUrl"
                  name="imgUrl"
                  value={this.state.imgUrl}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="name">URL for Image</label>
              </div>
            

            
              <div className="col imput-field s12">
                <input
                  type="text"
                  id="addr1"
                  name="addr1"
                  value={this.state.addr1}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="name">Address 1</label>
              </div>
            

            
              <div className="col imput-field s12">
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="name">City</label>
              </div>
            

            
              <div className="col imput-field s12">
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={this.state.state}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="name">State</label>
              </div>
            

            
              <div className="col imput-field s12">
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={this.state.zip}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="name">ZIP Code</label>
              </div>
              </div>
            <div className="row">
              <div className="col s12">
                <button className="btn waves-effect waves-light" type="submit">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewToken;
