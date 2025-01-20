import fs from 'fs';
import path from 'path';

const filePath = path.resolve('todos.json'); // Path to the JSON file

const readTasksFromFile = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return []; // Return empty array if the file doesn't exist or has an error
  }
};

const saveTasksToFile = (tasks) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf8');
  } catch (err) {
    console.error('Error saving tasks to file:', err);
  }
};

export const getAllTasks = () => {
  return readTasksFromFile();
};

export const addTask = (name) => {
  const tasks = readTasksFromFile();
  const task = { id: Date.now(), name, completed: false };
  tasks.push(task);
  saveTasksToFile(tasks);
  return task;
};

export const deleteTask = (id) => {
  let tasks = readTasksFromFile();
  tasks = tasks.filter(task => task.id !== id);
  saveTasksToFile(tasks);
};

export const markTaskCompleted = (id) => {
  const tasks = readTasksFromFile();
  const task = tasks.find(task => task.id === id);
  if (task) task.completed = true;
  saveTasksToFile(tasks);
  return task;
};
