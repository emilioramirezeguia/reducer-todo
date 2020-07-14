import React from "react";
import { useForm } from "../hooks/useForm";

function Form(props) {
  const [item, setItem, handleChanges] = useForm("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.dispatch({ type: "ADD_TODO", payload: item });
    setItem("");
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
    </div>
  );
}

export default Form;
