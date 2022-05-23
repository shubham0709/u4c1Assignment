import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ tasks, setTasks }) => {
  // NOTE: do not delete `data-cy` key value pair
  //console.log(props, "from addtasks");

  const [enteredTask, setEnteredTask] = useState("");
  const updateTasklist = () => {
    let flag = true;
    tasks.forEach((x) => {
      if (enteredTask === x.text || enteredTask == "") {
        flag = false;
      }
    });
    if (flag) {
      setTasks([
        ...tasks,
        {
          id: Math.floor(Math.random() * 100),
          text: enteredTask,
          done: false,
          count: 1,
        },
      ]);
    }
  };
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        onChange={(e) => {
          setEnteredTask(e.target.value);
        }}
      />
      <button data-cy="add-task-button" onClick={updateTasklist}>
        ADD
      </button>
    </div>
  );
};

export default AddTask;
