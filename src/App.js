// src/App.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';
import logo from './logo.png'; // Use the uploaded logo

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState('');
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const checkOverdueTasks = () => {
            const now = new Date();
            setTasks(prevTasks => prevTasks.map(task => {
                if (new Date(task.endDate) < now && task.status !== 'Completed' && task.status !== 'Overdue') {
                    return { ...task, status: 'Overdue' };
                }
                return task;
            }));
        };

        const interval = setInterval(checkOverdueTasks, 60000); // Check every minute

        checkOverdueTasks(); // Initial check when the component mounts

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    const addOrUpdateTask = (task) => {
        if (task.id) {
            setTasks(tasks.map(t => (t.id === task.id ? task : t)));
        } else {
            setTasks([...tasks, { ...task, id: Date.now(), status: 'Pending', owner: 'current_user' }]);
        }
        setCurrentTask(null);
    };

    const editTask = (task) => {
        setCurrentTask(task);
        setModalIsOpen(true);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedTasks = filteredTasks.sort((a, b) => {
        if (sortField === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortField === 'endDate') {
            return new Date(a.endDate) - new Date(b.endDate);
        } else if (sortField === 'status') {
            return a.status.localeCompare(b.status);
        }
        return 0;
    });

    return (
        <div className="container mx-auto p-4 dark:bg-gray-900 dark:text-white">
            <header className="flex justify-between items-center mb-6">
                <img src={logo} alt="GoTo" className="w-24" />
                <div className="flex space-x-4">
                    <button onClick={toggleTheme} className="bg-gray-800 text-white px-4 py-2 rounded">
                        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </button>
                    <button onClick={() => setModalIsOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Create Task</button>
                </div>
            </header>
            <div className="mb-6 flex justify-between">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-1/2 px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
                />
                <select
                    value={sortField}
                    onChange={(e) => setSortField(e.target.value)}
                    className="w-1/4 px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
                >
                    <option value="">Sort by...</option>
                    <option value="title">Title</option>
                    <option value="endDate">End Date</option>
                    <option value="status">Status</option>
                </select>
            </div>
            <TaskList tasks={sortedTasks} onEdit={editTask} onDelete={deleteTask} />
            <TaskModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                task={currentTask}
                onSave={addOrUpdateTask}
            />
        </div>
    );
};

export default App;
