import React from "react";
import Button from "../../UI/Button";
import styles from "./TodoItem.module.css";

function TodoItem(props) {
  const deleteItemHandler = () => {
    props.onDelete(props.id);
  };

  const editItemHandler = () => {
    props.onEdit(props.id);
  };

  return (
    <li className={styles.item} key={props.id}>
      {props.children}
      <div className={styles.buttons}>
        <Button className={styles.edit_button} onClick={editItemHandler}>
          Edit
        </Button>
        <Button className={styles.delete_button} onClick={deleteItemHandler}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default TodoItem;
