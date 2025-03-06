import { useState } from "react";

const MyForm = ({ onTaskAdded }) => {
    const [newTask, setTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        onTaskAdded(newTask); 
        setTask(""); 
    };

    const writeTask = (event) => {
        setTask(event.target.value);
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input type="text" onChange={writeTask} value={newTask} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
