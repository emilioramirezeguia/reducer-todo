import React, { useReducer } from "react";
import { initialTodos, reducer } from "./reducers/todoReducer";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <div className="App">
      <h1>Today's Todos</h1>
      <Form todos={todos} dispatch={dispatch} />
      <List todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
