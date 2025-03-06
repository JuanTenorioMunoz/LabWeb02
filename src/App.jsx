import './App.css';
import { MyForm, TasksContainer } from './components';
import { useState } from 'react';

function App() {
  const [trigger, setTrigger] = useState(false); // State to force re-render

  return (
    <>
      <MyForm setTrigger={setTrigger} /> 
      <TasksContainer status={"pending"} trigger={trigger} />
      <TasksContainer status={"doing"} trigger={trigger} />
      <TasksContainer status={"completed"} trigger={trigger} />
    </>
  );
}

export default App;