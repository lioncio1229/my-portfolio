import React, { Component } from "react";

class Main extends Component {

  apiURL = "http://localhost:3000/api/courses";
  index = 0;

  state = {
    course: "No Course",
  };

  handleUpdateText = async() => {
    let courseLength = 0;
    
    await this.request(this.apiURL, data => {
      courseLength = data.length;
      console.log("Course Length : ",courseLength);
    });
    
    if (this.index >= courseLength) return;

    this.request(this.apiURL, (data) => {
      const course = data[this.index]["name"];
      this.index++;
      this.setState({ course });
    });
  };

  async request(url, callback, options = { method: "GET" }) {
    const response = await fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      })
      .catch((error) => console.log("Error:", error));
    return response;
  }

  render() {
    return (
      <React.Fragment>
        <p> The new course selected is {this.state.course}</p>
        <button onClick={this.handleUpdateText}>Update</button>
      </React.Fragment>
    );
  }
}

export default Main;
