import React, { useState } from "react";
import TodoInput from "../components/Todo/Form/TodoInput";
import TodoList from "../components/Todo/TodoList/TodoList";
import styles from "./TodoPage.module.css";

function TodoPage() {
  const [todoList, setTodoList] = useState([]);
  const [enteredValue, setEnteredValue] = useState("");
  const [editId, setEditId] = useState("");
  const [isValid, setIsValid] = useState(true);

  const addTodoHandler = (todo) => {
    setTodoList((prevTodoList) => {
      return [...prevTodoList, { item: todo, id: Math.random().toString() }];
    });
  };

  const deleteTodoHandler = (todoId) => {
    setTodoList((prevTodoList) => {
      const newTodo = prevTodoList.filter((item) => item.id !== todoId);
      return newTodo;
    });
  };

  const editTodoHandler = (todoId) => {
    setEnteredValue(() => {
      const editTodo = todoList.find((item) => item.id === todoId);
      return editTodo.item;
    });
    setEditId(todoId);
  };

  return (
    <div className={styles.app}>
      <h1>TODO LIST</h1>
      <TodoInput
        enteredValue={enteredValue}
        setEnteredValue={setEnteredValue}
        editId={editId}
        setEditId={setEditId}
        todoList={todoList}
        setTodoList={setTodoList}
        isValid={isValid}
        setIsValid={setIsValid}
        onAddTodo={addTodoHandler}
      />
      <TodoList
        todoList={todoList}
        onDeleteTodo={deleteTodoHandler}
        onEditTodo={editTodoHandler}
      />
    </div>
  );
}

export default TodoPage;
