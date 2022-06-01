import React from "react";
import Card from "../../UI/Card";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

function TodoList(props) {
  return (
    <React.Fragment>
      {props.todoList.length > 0 ? (
        <Card className={styles.todos}>
          <ul>
            {props.todoList.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                item={todo.item}
                onDelete={props.onDeleteTodo}
                onEdit={props.onEditTodo}
              >
                {todo.item}
              </TodoItem>
            ))}
          </ul>
        </Card>
      ) : (
        <p className={styles.message}>No item found. Maybe add one?</p>
      )}
    </React.Fragment>
  );
}

export default TodoList;
