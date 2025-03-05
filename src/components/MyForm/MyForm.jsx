import { useState } from "react";

const MyForm = () =>{
    
    const handleSubmit = (event) => {
		event.preventDefault();
        setTask("");
	};

    const addTask = (event) => {
        setTask(event.target.value);
        console.log(newTask);
    }

    const [newTask, setTask] = useState("")
    
    return(

        <form className="form-container" onSubmit={handleSubmit}>
            <input type="text" onChange={addTask} value={newTask}></input>
            <button type="submit">sumbbbbit</button>
        </form>
    )
}

export default MyForm;