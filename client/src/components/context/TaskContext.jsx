import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  
  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data || []);
    } catch (error) {
      console.error('Error fetching tasks from server:', error);
    }
  };

  
  const addTask = async (taskData) => {
    const newTask = {
      _id: Date.now().toString(), 
      ...taskData
    };

    
    setTasks((prev) => [...prev, newTask]);

    try {
      const res = await axios.post('http://localhost:5000/api/tasks', taskData);
      if (res.data) {
        
        setTasks((prev) =>
          prev.map((t) => (t._id === newTask._id ? res.data : t))
        );
      }
    } catch (error) {
      console.error('Error adding task to backend:', error);
    }
  };


  const deleteTask = async (id) => {
    
    setTasks((prev) => prev.filter((t) => (t._id || t.id) !== id));

    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    } catch (error) {
      console.error('Error deleting task on server:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
};