import { useEffect, useState } from "react";

const MyForm = ({ setTrigger }) => {
  const [newTask, setTask] = useState("");

  useEffect(() => {
    const localLength = localStorage.length;
    console.log("LocalStorage length:", localLength);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(newTask);
    setTask("");
    setTrigger((prev) => !prev); // Toggle trigger to force re-render
  };

  const writeTask = (event) => {
    setTask(event.target.value);
    console.log(newTask);
  };

  const addTask = (receivedTask) => {
    const existingTasks = JSON.parse(localStorage.getItem("pending")) || [];
    existingTasks.push(receivedTask);
    localStorage.setItem("pending", JSON.stringify(existingTasks));
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input type="text" onChange={writeTask} value={newTask} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;