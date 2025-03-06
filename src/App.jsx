import './App.css';
import { MyForm, TasksContainer } from './components';
import { useState } from 'react';

function App() {
    const [updateTrigger, setUpdateTrigger] = useState(0);

    const refreshTasks = () => {
        setUpdateTrigger(prev => prev + 1);
    };

    return (
        <>
            <MyForm onTaskAdded={refreshTasks} />
            <TasksContainer key={`pending-${updateTrigger}`} status="pending" onTaskChange={refreshTasks} />
            <TasksContainer key={`doing-${updateTrigger}`} status="doing" onTaskChange={refreshTasks} />
            <TasksContainer key={`completed-${updateTrigger}`} status="completed" onTaskChange={refreshTasks} />
        </>
    );
}

export default App;


