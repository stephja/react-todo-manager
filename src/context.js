import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? (todo = action.payload) : todo
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    todos: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

    this.setState({ todos: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
