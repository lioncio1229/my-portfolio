import React, { Component } from "react";
import NavBar from "./navbar";
import Counters from "./counters";

class Main extends Component {
  constructor() {
    super();
    console.log("main - constructor");
  }

  componentDidMount() {
    console.log("main - mounted");
  }

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = this.state.counters.map((c) => {
      if (c.id == counter.id) c.value += 1;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("main - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <Counters
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}

export default Main;
