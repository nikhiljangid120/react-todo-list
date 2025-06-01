import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState('');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    const trimmed = newTask.trim();
    if (!trimmed) {
      setError('Task cannot be empty');
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: trimmed, completed: false }]);
    setNewTask('');
    setError('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => 
    filter === 'completed' ? task.completed : filter === 'active' ? !task.completed : true
  );

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
            setError('');
          }}
          placeholder="Add a task..."
        />
        <button type="submit">Add</button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="filters">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Done</button>
      </div>
      <ul>
        {filteredTasks.length === 0 ? (
          <p className="no-tasks">No tasks yet!</p>
        ) : (
          filteredTasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.completed ? 'completed' : ''}>{task.text}</span>
              <button onClick={() => removeTask(task.id)}>✕</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;