// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <div>
            {tasks.length === 0 ? (
                <p className="text-center text-gray-600 dark:text-gray-400">No tasks available</p>
            ) : (
                tasks.map(task => (
                    <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
                ))
            )}
        </div>
    );
};

export default TaskList;
