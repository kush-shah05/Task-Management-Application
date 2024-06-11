# Task Manager Application

This is a task management application built with React and TailwindCSS. It allows users to manage tasks with features such as creating, editing, deleting, and listing tasks. Users can sort tasks by title, end date, or status. The application supports dark and light themes, and it automatically marks overdue tasks.

## Features

- **Create Task:** Users can create tasks with a title, description, and end date. The task status is set to "Pending" upon creation.
- **Edit Task:** Users can edit the title, description, and end date of tasks.
- **Delete Task:** Users can delete tasks from the list.
- **List Tasks:** Displays a list of all tasks including their title, description, end date, and status.
- **Search Tasks:** Users can search tasks by title.
- **Sort Tasks:** Users can sort tasks by title, end date, or status.
- **Theme Toggle:** Users can switch between dark and light themes. The preference is stored in local storage.
- **Overdue Tasks:** Tasks with past due dates are automatically marked as "Overdue" and displayed with red text.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/kush-shah05/Task-Management-Application.git
    cd task-management-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm start
    ```

### Usage

Once the development server is running, you can access the application in your web browser at `http://localhost:3000`.

### Project Structure

- `src/App.js`: The main component that sets up the application.
- `src/components/TaskList.js`: Component to list all tasks.
- `src/components/Task.js`: Component to display a single task.
- `src/components/TaskModal.js`: Component for the task creation and editing modal.
- `src/index.css`: Custom styles including TailwindCSS and dark mode styles.
- `src/index.js`: Entry point for the React application.

### Customization

- **Logo:** Replace `src/logo.png` with your own logo if desired.
- **Theme Colors:** Customize the TailwindCSS configuration in `tailwind.config.js`.

### Deployment

To create a production build, run:

```bash
npm run build
