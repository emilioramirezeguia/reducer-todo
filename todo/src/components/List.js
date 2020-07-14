import React from "react";

function List(props) {
  const toggleComplete = (clickId) => {
    props.dispatch({ type: "TOGGLE_COMPLETE", payload: clickId });
  };

  return (
    <div className="todoList">
      <ul>
        {props.todos.map((todo) => (
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

export default List;
