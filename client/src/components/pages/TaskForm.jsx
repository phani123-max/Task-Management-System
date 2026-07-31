import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (addTask) {
      addTask({ title, description, priority });
    } else {
      console.error("addTask function missing from context");
    }

    setTitle('');
    setDescription('');
    setPriority('Medium');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h3 style={{ margin: '0 0 1rem 0', color: '#2b3674', fontSize: '1.1rem' }}>Add New Task</h3>
      
      <input
        type="text"
        placeholder="Task Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={styles.input}
      />
      
      <textarea
        placeholder="Task Description (optional)..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="2"
        style={{ ...styles.input, resize: 'none' }}
      />
      
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={styles.input}
      >
        <option value="Low">🟢 Low Priority</option>
        <option value="Medium">🟡 Medium Priority</option>
        <option value="High">🔴 High Priority</option>
      </select>

      <button type="submit" style={styles.button}>
        + Add Task
      </button>
    </form>
  );
};

const styles = {
  input: {
    width: '100%',
    padding: '12px 14px',
    marginBottom: '12px',
    borderRadius: '10px',
    border: '1px solid #e0e5f2',
    backgroundColor: '#f8fafc',
    fontSize: '0.9rem',
    outline: 'none',
    boxSizing: 'border-box'
  },
  button: {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#4318ff',
    color: '#ffffff',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer'
  }
};

export default TaskForm;