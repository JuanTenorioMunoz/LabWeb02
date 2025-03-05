import { useEffect } from "react"

const TasksContainer = ({status}) => {

    useEffect(()=> {
        console.log(localStorage)
    },[taskCount])
    
    

    return(
        <div className={status + "-TasksContainer"}>
        </div>
    )

    //localStorageRendering()
}   

export default TasksContainer