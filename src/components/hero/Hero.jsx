import React, { Component } from "react";

export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      show: false,
    };
    this.handleReset = this.handleReset.bind(this);
  }
  handleClick(p) {
    alert("class clicked" + p);
  }
  handleReset() {
    this.setState({ count: 0 });
  }
  render() {
    return (
      <>
        <h2>
          {this.props.title} Hero {this.state.count}
        </h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment
        </button>
        <hr />
        <button
          disabled={this.state.count <= 0}
          className="disabled:bg-slate-100"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          decrement
        </button>
        {!!this.state.count && (
          <div>
            <hr />
            <button onClick={this.handleReset}>reset</button>
          </div>
        )}

        <hr />
        <button onClick={() => this.handleClick(5)}>class click</button>
        <br />
        <button className="border bg-blue-300 rounded-md px-2 py-1" onClick={() => this.setState({ show: !this.state.show })}>
          {this.state.show ? "hide" : "show more"}
        </button>
        {this.state.show && (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            quaerat.
          </p>
        )}
      </>
    );
  }
}
