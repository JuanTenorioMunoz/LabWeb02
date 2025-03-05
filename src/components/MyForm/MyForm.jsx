import { useState } from "react";

const MyForm = () =>{

    const [newTask, setTask] = useState("")
    const [taskNumber, setTaskNumber] = useState(0)
    
    const handleSubmit = (event) => {
		event.preventDefault();
        addTask(newTask);
        setTask("");
	};

    const writeTask = (event) => {
        setTask(event.target.value);
        console.log(newTask);
    }

    const addTask = (receivedTask) => {
        localStorage.setItem(taskNumber, receivedTask)
        console.log("task written " + receivedTask)
        setTaskNumber(number => number + 1)
        console.log("task number " + taskNumber)
    }

    
    return(

        <form className="form-container" onSubmit={handleSubmit}>
            <input type="text" onChange={writeTask} value={newTask}></input>
            <button type="submit">sumbbbbit</button>
        </form>
    )
}

export default MyForm;