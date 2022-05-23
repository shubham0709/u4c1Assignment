import React from "react";
import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import TaskHeader from "./TaskHeader/TaskHeader";

const TaskApp = ({ tasks, setTasks }) => {
  // NOTE: do not delete `data-cy` key value pair
  //console.log(props, "from task app");
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader tasks={tasks} setTasks={setTasks}></TaskHeader>
      {/* Add Task */}
      <AddTask tasks={tasks} setTasks={setTasks}></AddTask>
      {/* Tasks */}
      <Tasks tasks={tasks} setTasks={setTasks}></Tasks>
    </div>
  );
};

export default TaskApp;
