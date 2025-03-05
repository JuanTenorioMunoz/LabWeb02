import { useEffect, useState } from "react"

const TasksContainer = ({status}) => {

    const [taskCount, setTaskCount] = useState(0)


    useEffect(()=> {
        Object.keys(localStorage).forEach(key => {
            console.log(key + localStorage.getItem(key))
        });

    },[taskCount])

    return(
        <div className={status + "-TasksContainer"}>
        </div>
    )

    //localStorageRendering()
}   

export default TasksContainer