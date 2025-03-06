import { useEffect, useState } from "react"

const TasksContainer = ({status}) => {

    const [tasks, setTasks] = useState([]);

    useEffect(()=> {
        const parsedStatus = JSON.parse(localStorage.getItem(status))
        console.log("rendering:" + parsedStatus)
        setTasks(parsedStatus);
    },[])

    return(
        <div className={status + "-TasksContainer"}>
        </div>
    )

}   

export default TasksContainer