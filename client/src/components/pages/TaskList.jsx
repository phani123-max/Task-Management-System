
import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const context = useContext(TaskContext);
  const tasks = context?.tasks || [];

  if (tasks.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '1rem' }}>No tasks available.</p>;
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      {tasks.map((task) => (
        <TaskItem key={task._id || task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;