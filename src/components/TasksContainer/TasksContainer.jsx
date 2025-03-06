import { useEffect, useState } from "react";

const TasksContainer = ({ status, trigger }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const parsedStatus = JSON.parse(localStorage.getItem(status)) || [];
    console.log("Rendering:", parsedStatus);
    setTasks(parsedStatus);
  }, [trigger]); 

  return (
    <div className={status + "-TasksContainer"}>
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

export default TasksContainer;