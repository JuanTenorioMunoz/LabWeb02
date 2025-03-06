const TaskCard = ({ status, description, updateTask }) => {
    const statusFlow = ["pending", "doing", "completed"];
    const currentIndex = statusFlow.indexOf(status);

    const moveTask = (newStatus) => {
        updateTask(status, prevTasks => prevTasks.filter(task => task !== description));
        updateTask(newStatus, prevTasks => [...prevTasks, description]);
    };

    const deleteTask = () => {
        updateTask(status, prevTasks => prevTasks.filter(task => task !== description));
    };

    return (
        <div className={status + "-task"}>
            <p>{description}</p>
            <div className="task-buttons">
                {currentIndex > 0 && (
                    <button onClick={() => moveTask(statusFlow[currentIndex - 1])}>Back</button>
                )}
                {currentIndex < statusFlow.length - 1 && (
                    <button onClick={() => moveTask(statusFlow[currentIndex + 1])}>Forward</button>
                )}
                <button onClick={deleteTask}>Delete</button>
            </div>
        </div>
    );
};

export default TaskCard;
