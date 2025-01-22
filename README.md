 <h1>Mampai Rantsi Link  To do list</h1>
<h2>Deployment Link # ToDoList</h2>
https://todolist-n8uv.onrender.com/
<h2>To-do-list-app Structure</h2>
</dl>
   <dl>
<li>Public</li>
<dd> index.html</dd>
     </dl>
   <dl>
    </dl>
   <dl>
<li>src</li>
<dd> app.js</dd>
<dd> server.js</dd>
<dd> tasks.js</dd>
     </dl>
   <dl>
<li>.gitigno</li>
<li>package.json</li>
<li>vercel.json</li>


# Task Manager Application

A simple task manager application built using **Node.js**, **Express.js**, and **vanilla JavaScript** for managing tasks. It includes features to add, complete, delete, and fetch tasks. Tasks are stored in a local JSON file for simplicity.

---

## Features

- **Add tasks**: Add new tasks to the list.
- **Mark tasks as completed**: Mark tasks visually by striking through them.
- **Delete tasks**: Remove tasks from the list.
- **Persistent storage**: Stores tasks in a local JSON file (`todos.json`).

---

## Project Structure

```
</dl>
   <dl>
<li>Public/</li>
- **index.html**:        Frontend UI
- **script.js**:       #JavaScript for client-side logic
 </dl>
   <dl>
├── tasks.js             # Module handling task operations (CRUD)
├── server.js            # Backend server
├── todos.json           # JSON file storing tasks
└── README.md            # Project documentation

---
## Prerequisites

Ensure the following tools are installed:

Node.js
npm (comes with Node.js)

Installation

Clone the repository:
git clone https://github.com/your-repo/task-manager.git
cd task-manager

Install dependencies:
npm install

Start the server:
npm start

Access the application at:
http://localhost:3000

API Endpoints
Base URL: /api/tasks
Method	Endpoint	Description
GET    /api/tasks	Fetch all tasks.
POST	 /api/tasks	Add a new task (name required).
PUT    /api/tasks/:id	Mark a task as completed.
DELETE	/api/tasks/:id	Delete a task by ID.

Technologies Used
Frontend
HTML
Vanilla JavaScript
CSS

Backend
Node.js
Express.js

Storage
Local JSON File (todos.json)

Improvements to Consider
Add user authentication for managing tasks.
Migrate storage to a database (e.g., MongoDB, PostgreSQL).
Enhance UI/UX with a modern frontend framework like React.
Add unit tests for both client-side and server-side code.

Author

You can customize the placeholder details (e.g., "Your Name," GitHub repository URL) as needed. Let me know if you'd like further modifications! 😊


