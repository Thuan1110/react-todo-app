import React from "react";
import Button from "../../UI/Button";
import styles from "./TodoInput.module.css";

function TodoInput(props) {
  const todoInputChangeHandler = (event) => {
    props.setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (props.editId) {
      const editTodo = props.todoList.find((item) => item.id === props.editId);
      const updatedTodoList = props.todoList.map((todo) =>
        todo.id === editTodo.id
          ? (todo = { id: todo.id, item: props.enteredValue })
          : { id: todo.id, item: todo.item }
      );
      props.setTodoList(updatedTodoList);
      props.setEditId("");
      props.setEnteredValue("");
      return;
    }

    if (props.enteredValue.trim().length === 0) {
      props.setIsValid(false);
      return;
    } else {
      props.setIsValid(true);
    }
    props.onAddTodo(props.enteredValue);
    props.setEnteredValue("");
  };

  return (
    <React.Fragment>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Enter todo..."
            value={props.enteredValue}
            onChange={todoInputChangeHandler}
          />
          <Button type="submit"> {props.editId ? "Edit" : "Add"}</Button>
        </div>
      </form>
      {props.isValid === false ? (
        <p className={styles.message}>Please Enter Todo!</p>
      ) : null}
    </React.Fragment>
  );
}

export default TodoInput;
