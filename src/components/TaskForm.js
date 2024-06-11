// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ task, onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState('Pending');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setEndDate(task.endDate);
            setStatus(task.status);
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ id: task ? task.id : null, title, description, endDate, status });
        setTitle('');
        setDescription('');
        setEndDate('');
        setStatus('Pending');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-4">
            <div className="mb-3">
                <label className="block text-gray-700">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-3">
                <label className="block text-gray-700">Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-3">
                <label className="block text-gray-700">End Date</label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-3">
                <label className="block text-gray-700">Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full px-3 py-2 border rounded">
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <button type="submit" className="bg-green-500 text-white px-3 py-2 rounded">
                {task ? 'Update Task' : 'Create Task'}
            </button>
        </form>
    );
};

export default TaskForm;
