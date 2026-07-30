
let tasks = [
  { id: '1', title: 'First Task', description: 'Sample description', priority: 'Medium' }
];


const getTasks = (req, res) => {
  res.status(200).json(tasks);
};


const createTask = (req, res) => {
  const { title, description, priority } = req.body;
  
  if (!title) {
    return res.status(400).json({ message: 'Please add a task title' });
  }

  const newTask = {
    id: Date.now().toString(),
    title,
    description: description || '',
    priority: priority || 'Medium'
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};



const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, priority } = req.body;

  let task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.title = title || task.title;
  task.description = description !== undefined ? description : task.description;
  task.priority = priority || task.priority;

  res.status(200).json(task);
};


const deleteTask = (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((t) => t.id !== id);
  res.status(200).json({ id, message: 'Task removed' });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};