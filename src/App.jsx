import './App.css';
import { MyForm, TasksContainer } from './components';
import { useState, useEffect } from 'react';

function App() {
    const [tasks, setTasks] = useState({
        pending: JSON.parse(localStorage.getItem("pending")) || [],
        doing: JSON.parse(localStorage.getItem("doing")) || [],
        completed: JSON.parse(localStorage.getItem("completed")) || []
    });

    useEffect(() => {
        localStorage.setItem("pending", JSON.stringify(tasks.pending));
        localStorage.setItem("doing", JSON.stringify(tasks.doing));
        localStorage.setItem("completed", JSON.stringify(tasks.completed));
    }, [tasks]);

    const addTask = (task) => {
        console.log("Task received:", task); 
        if (!task || task.trim() === "") return;
    
        setTasks(prev => {
            console.log("Updated pending tasks:", [...prev.pending, task]);
            return {
                ...prev,
                pending: [...prev.pending, task]
            };
        });
    };
    
    const updateTask = (status, updateFunction) => {
        setTasks(prev => ({
            ...prev,
            [status]: typeof updateFunction === "function" ? updateFunction(prev[status]) : updateFunction
        }));
    };
    

    return (
        <>
            <MyForm onTaskAdded={addTask} />
            <div id='containerColumns'>
            <TasksContainer status="pending" tasks={tasks.pending} updateTask={updateTask} />
            <TasksContainer status="doing" tasks={tasks.doing} updateTask={updateTask} />
            <TasksContainer status="completed" tasks={tasks.completed} updateTask={updateTask} />
            </div>
        </>
    );
}

export default App;
