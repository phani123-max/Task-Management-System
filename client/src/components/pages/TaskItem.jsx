import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

const TaskItem = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  const priorityColors = {
    High: { bg: '#fee2e2', text: '#dc2626' },
    Medium: { bg: '#fef3c7', text: '#d97706' },
    Low: { bg: '#dcfce7', text: '#16a34a' }
  };

  const badge = priorityColors[task.priority] || priorityColors.Medium;

  return (
    <div style={styles.card}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={styles.title}>{task.title}</span>
          <span style={{ ...styles.badge, backgroundColor: badge.bg, color: badge.text }}>
            {task.priority || 'Medium'}
          </span>
        </div>
        {task.description && <p style={styles.description}>{task.description}</p>}
      </div>

      <button
        onClick={() => deleteTask(task._id || task.id)}
        style={styles.deleteBtn}
      >
        Delete
      </button>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 16px',
    borderRadius: '12px',
    backgroundColor: '#f8fafc',
    border: '1px solid #f1f5f9',
    marginBottom: '10px'
  },
  title: {
    fontWeight: '600',
    color: '#1e293b',
    fontSize: '0.95rem'
  },
  description: {
    margin: '4px 0 0 0',
    fontSize: '0.85rem',
    color: '#64748b'
  },
  badge: {
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '2px 8px',
    borderRadius: '12px'
  },
  deleteBtn: {
    backgroundColor: '#fff0f0',
    color: '#e11d48',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '0.8rem',
    fontWeight: '600',
    cursor: 'pointer',
    marginLeft: '12px'
  }
};

export default TaskItem;