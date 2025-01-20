const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

const API_URL = '/api/tasks';

// Fetch tasks from the backend
async function fetchTasks() {
  const response = await fetch(API_URL);
  const tasks = await response.json();

  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.name;

    if (task.completed) {
      li.style.textDecoration = 'line-through';
    }

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.onclick = () => markTaskCompleted(task.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTask(task.id);

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

// Add a new task
async function addTask() {
  const taskName = taskInput.value.trim();
  if (!taskName) return alert('Task name cannot be empty');

  console.log('Sending request to add task:', taskName);  // Log task name being sent

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: taskName }),
  });

  if (response.ok) {
    taskInput.value = '';
    fetchTasks();
  } else {
    console.error('Error adding task:', await response.text());
  }
}

// Mark a task as completed
async function markTaskCompleted(taskId) {
  await fetch(`${API_URL}/${taskId}`, { method: 'PUT' });
  fetchTasks();
}

// Delete a task
async function deleteTask(taskId) {
  await fetch(`${API_URL}/${taskId}`, { method: 'DELETE' });
  fetchTasks();
}

// Initialize the app
addTaskBtn.addEventListener('click', addTask);
fetchTasks();
