import { useState } from "react";

const MyForm = ({ onTaskAdded }) => {
    const [newTask, setTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(newTask);
        setTask("");

        onTaskAdded();
    };

    const writeTask = (event) => {
        setTask(event.target.value);
    };

    const addTask = (receivedTask) => {
        const existingTasks = JSON.parse(localStorage.getItem("pending")) || [];
        existingTasks.push(receivedTask);
        localStorage.setItem("pending", JSON.stringify(existingTasks));
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input type="text" onChange={writeTask} value={newTask} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
