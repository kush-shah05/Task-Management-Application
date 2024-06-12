// src/components/TaskModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const TaskModal = ({ isOpen, onRequestClose, task, onSave }) => {
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
        onSave({ id: task ? task.id : null, title, description, endDate, status, owner: task ? task.owner : null });
        setTitle('');
        setDescription('');
        setEndDate('');
        setStatus('Pending');
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal dark:bg-gray-800 dark:text-white"
            overlayClassName="overlay"
        >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded shadow-md">
                <h2 className="text-xl mb-4">{task ? 'Update Task' : 'Create Task'}</h2>
                <div className="mb-3">
                    <label className="block text-gray-700 dark:text-gray-300">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" required />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 dark:text-gray-300">Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" required />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 dark:text-gray-300">End Date</label>
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" required />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 dark:text-gray-300">Status</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white">
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <button type="submit" className="bg-green-500 text-white px-3 py-2 rounded">
                    {task ? 'Update Task' : 'Create Task'}
                </button>
            </form>
        </Modal>
    );
};

export default TaskModal;
