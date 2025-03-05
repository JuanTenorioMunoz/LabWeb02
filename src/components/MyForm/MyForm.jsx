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

        const existingTasks = JSON.parse(localStorage.getItem("pending")) || [];
        existingTasks.push(receivedTask);
        localStorage.setItem("pending", JSON.stringify(existingTasks));
    }
    
    return(
        <form className="form-container" onSubmit={handleSubmit}>
            <input type="text" onChange={writeTask} value={newTask}></input>
            <button type="submit">sumbbbbit</button>
        </form>
    )
}

export default MyForm;