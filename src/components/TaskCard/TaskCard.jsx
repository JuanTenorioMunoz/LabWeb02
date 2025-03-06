const TaskCard = ({ status, description, onUpdate }) => {
    const statusFlow = ["pending", "doing", "completed"];
    const currentIndex = statusFlow.indexOf(status);

    const updateTasks = (newStatus) => {
        const currentTasks = JSON.parse(localStorage.getItem(status)) || [];
        const updatedTasks = currentTasks.filter(task => task !== description);
        localStorage.setItem(status, JSON.stringify(updatedTasks));

        const newTasks = JSON.parse(localStorage.getItem(newStatus)) || [];
        newTasks.push(description);
        localStorage.setItem(newStatus, JSON.stringify(newTasks));

        onUpdate();  
    };

    const deleteTask = () => {
        const currentTasks = JSON.parse(localStorage.getItem(status)) || [];
        const updatedTasks = currentTasks.filter(task => task !== description);
        localStorage.setItem(status, JSON.stringify(updatedTasks));

        onUpdate();  
    };

    return (
        <div className={status + "-task"}>
            <p>{description}</p>
            <div className="task-buttons">
                {currentIndex > 0 && (
                    <button onClick={() => updateTasks(statusFlow[currentIndex - 1])}>Back</button>
                )}
                {currentIndex < statusFlow.length - 1 && (
                    <button onClick={() => updateTasks(statusFlow[currentIndex + 1])}>Forward</button>
                )}
                <button onClick={deleteTask}>Delete</button>
            </div>
        </div>
    );
};

export default TaskCard;
