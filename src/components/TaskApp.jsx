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
      <TaskHeader
        tasks={tasks}
        setTasks={setTasks}
        className="task-header"
      ></TaskHeader>
      {/* Add Task */}
      <AddTask
        tasks={tasks}
        setTasks={setTasks}
        className={styles.taskAdd}
      ></AddTask>
      {/* Tasks */}
      <Tasks tasks={tasks} setTasks={setTasks} className="task-list"></Tasks>
    </div>
  );
};

export default TaskApp;
