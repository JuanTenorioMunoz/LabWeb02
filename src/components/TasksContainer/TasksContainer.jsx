import { useEffect, useState } from "react";
import TaskCard from "../TaskCard/TaskCard";

const TasksContainer = ({ status, onTaskChange }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const parsedTasks = JSON.parse(localStorage.getItem(status)) || [];
        setTasks(parsedTasks);
    }, [status, onTaskChange]);  
    
    return (
        <div className={status + "-TasksContainer"}>
            <h1>{status}</h1>
            {tasks.map((task, index) => (
                <TaskCard key={index} status={status} description={task} onUpdate={onTaskChange} />
            ))}
        </div>
    );
};

export default TasksContainer;

