import React from 'react';
import { TaskProvider } from '../context/taskContext';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Home = () => {
  return (
    <TaskProvider>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Task Manager</h1>
          <p style={styles.subtitle}>Organize your daily workflow effortlessly</p>
        </header>
        <div style={styles.card}>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f4f7fe',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem 1rem',
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: '#1b2559',
    margin: '0 0 0.5rem 0'
  },
  subtitle: {
    color: '#a3edd9',
    color: '#707eae',
    fontSize: '0.95rem',
    margin: 0
  },
  card: {
    width: '100%',
    maxWidth: '520px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
  }
};

export default Home;