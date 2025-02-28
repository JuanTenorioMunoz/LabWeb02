import { useState } from "react";

const MyForm = () =>{
    
    const handleSubmit = (event) => {
		event.preventDefault();
	};

    const addTask = () => {
        setTask((namer)=> namer = input.value)
        console.log(task)
        console.log("egge")
    }

    const [task, setTask] = useState("")
    


    return(

        <form className="form-container" onSubmit={handleSubmit}>
            <input></input>
            <button type="submit" onSubmit={addTask}>sumbbbbit</button>
        </form>
    )
}

export default MyForm;