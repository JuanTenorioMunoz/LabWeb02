import TaskCard from "../TaskCard/TaskCard";

const TasksContainer = ({ status, tasks, updateTask }) => {
    console.log("THIS ARE TASKS" + tasks)
    return (
        <div className={status + "-TasksContainer"}>
            <h1>{status}</h1>
            {tasks.map((task, index) => (
                <TaskCard key={index} status={status} description={task} updateTask={updateTask} />
            ))}
        </div>
    );
};

export default TasksContainer;
