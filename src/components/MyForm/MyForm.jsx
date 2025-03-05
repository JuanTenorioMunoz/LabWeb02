import { useEffect, useState } from "react";

const MyForm = () =>{
    
    const [newTask, setTask] = useState("")
    
    useEffect(()=>{
        const localLenght = localStorage.length 
        console.log("lenghtyyy" + localLenght)
    },[])
    
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

        const newTask = {
            state: "pending",
            description: receivedTask,
        };

        localStorage.setItem(taskNumber, JSON.stringify(newTask))
        console.log("task written " + JSON.stringify(newTask))
    }
    
    return(
        <form className="form-container" onSubmit={handleSubmit}>
            <input type="text" onChange={writeTask} value={newTask}></input>
            <button type="submit">sumbbbbit</button>
        </form>
    )
}

export default MyForm;