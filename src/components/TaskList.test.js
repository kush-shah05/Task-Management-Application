// src/components/TaskList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';

const tasks = [
  { id: 1, title: 'Task 1', description: 'Description 1', endDate: '2024-12-31', status: 'Pending', owner: 'user1' },
  { id: 2, title: 'Task 2', description: 'Description 2', endDate: '2023-12-31', status: 'Overdue', owner: 'user2' },
];

test('renders TaskList component with tasks', () => {
  render(<TaskList tasks={tasks} onEdit={() => {}} onDelete={() => {}} />);
  
  // Check if tasks are rendered
  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('Task 2')).toBeInTheDocument();
});
