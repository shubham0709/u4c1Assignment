import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({ tasks, setTasks }) => {
  // NOTE: do not delete `data-cy` key value pair
  //console.log(tasks, "from tasks");
  console.log(tasks, "from Tasks");
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        <Task tasks={tasks} setTasks={setTasks}></Task>
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
