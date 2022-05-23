import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({ tasks, setTasks }) => {
  // NOTE: do not delete `data-cy` key value pair
  //console.log(setTasks);

  let removeTask = (elem) => {
    let newArr = tasks.filter((x) => {
      return x.id !== elem.id;
    });
    setTasks([...newArr]);
  };

  return (
    <>
      {tasks.map((elem) => (
        <li data-cy="task" className={styles.task}>
          <input
            type="checkbox"
            data-cy="task-checkbox"
            onChange={() => console.log(elem)}
          />
          <div data-cy="task-text">{elem.text}</div>
          <Counter></Counter>
          <button
            data-cy="task-remove-button"
            onClick={() => {
              removeTask(elem);
            }}
          >
            Remove
          </button>
        </li>
      ))}
    </>
  );
};

export default Task;
