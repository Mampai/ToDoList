import express from 'express';
import cors from 'cors';
import { getAllTasks, addTask, deleteTask, markTaskCompleted } from './tasks.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/api/tasks', (req, res) => {
  res.json(getAllTasks());
});

app.post('/api/tasks', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Task name is required' });
  const task = addTask(name);
  res.status(201).json(task);
});

app.put('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = markTaskCompleted(id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  deleteTask(id);
  res.status(200).json({ message: 'Task deleted' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
