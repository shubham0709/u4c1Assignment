import React, { useState } from "react";
import data from "./data/tasks.json";
import TaskApp from "./components/TaskApp.jsx";

function App() {
  const [tasks, setTasks] = useState([...data]);

  return <div>{
    <TaskApp tasks={tasks} setTasks={setTasks} />
  }</div>;
}

export default App;
