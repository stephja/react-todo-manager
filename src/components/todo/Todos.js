import React, { Component } from "react";
import Todo from "./Todo";
import { Consumer } from "../../context";

class Todos extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { todos } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Todo</span> List
              </h1>
              {todos.map(todo => (
                <Todo key={todo.id} todo={todo} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Todos;
