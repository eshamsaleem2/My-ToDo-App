import "./App.css";
import { useState } from "react";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <div className="container">
      <h1>My ToDo App</h1>
      <div className="input-box">
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add-btn" onClick={addTask}>Add Task </button>
</div>
      <ul>
        {tasks.map((item, index) => (
          <li>
            {item}
            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
