// src/components/Task.js
import React from 'react';

const Task = ({ task, onEdit, onDelete }) => {
    const getStatusColor = (status) => {
        if (status === 'Completed') {
            return 'text-green-600';
        } else if (status === 'Overdue') {
            return 'text-red-600';
        } else {
            return 'text-yellow-600';
        }
    };

    return (
        <div className="border p-6 mb-4 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
            <h3 className="text-2xl font-bold">{task.title}</h3>
            <p className="text-lg">{task.description}</p>
            <p className="text-gray-600 dark:text-gray-400">End Date: {task.endDate}</p>
            <p className={`text-lg ${getStatusColor(task.status)}`}>Status: {task.status}</p>
            <p className="text-gray-600 dark:text-gray-400">Owner: {task.owner}</p>
            <div className="flex justify-end mt-4">
                <button onClick={() => onEdit(task)} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Edit</button>
                <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </div>
        </div>
    );
};

export default Task;
