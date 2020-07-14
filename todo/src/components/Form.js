import React from "react";
import { useForm } from "../hooks/useForm";

function Form(props) {
  const [item, setItem, handleChanges] = useForm("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.dispatch({ type: "ADD_TODO", payload: item });
    setItem("");
  };

  const clearCompleted = () => {
    props.dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item"></label>
        <input
          id="item"
          name="todo"
          placeholder="Add item"
          value={item}
          onChange={handleChanges}
        />
        <button>Add item</button>
      </form>
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
}

export default Form;
