import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.resetCounterHandler = this.resetCounterHandler.bind(this);
  }
  addCounterHandler() {
    console.log("addCounterHandler");
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  }
  minuseCounterHandler() {
    console.log("minuseCounterHandler");
    this.setState((prev) => {
      return { count: prev.count - 1 };
    });
  }
  resetCounterHandler() {
    console.log("resetCounterHandler");
    this.setState({ count: 0 });
  }
  render() {
    return (
      <>
        <button onClick={this.resetCounterHandler}>reset</button>
        <button onClick={() => this.addCounterHandler()}>add</button>
        {this.state.count}
        <button onClick={this.minuseCounterHandler.bind(this)}>minues</button>
      </>
    );
  }
}
