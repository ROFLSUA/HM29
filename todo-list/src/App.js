// src/App.js
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} onClick={() => toggleTask(index)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
        <button onClick={addTask}>Додати Справу</button>
      </div>
    </div>
  );
}

export default App;
