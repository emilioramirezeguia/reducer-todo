import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers/todoReducer";
import Form from "./Form";

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleComplete = (clickId) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: clickId });
  };

  return (
    <div className="todoList">
      <Form dispatch={dispatch} />
      <ul>
        {state.map((todo) => (
          <li
            onClick={() => toggleComplete(todo.id)}
            className={todo.completed && "completed"}
          >
            {todo.item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
