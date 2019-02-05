import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { title, completed, date } = this.props.todo;
    return (
      <div className="card mr-auto mb-4">
        <div className="card-header justify-content-left">{title}</div>
        <div className="card-body">
          <p>{completed}</p>
          <br />
          <span>{date}</span>
        </div>
      </div>
    );
  }
}
