// src/components/TaskModal.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskModal from './TaskModal';

test('renders TaskModal component and allows task creation', () => {
  const handleSave = jest.fn();
  
  render(<TaskModal isOpen={true} onRequestClose={() => {}} task={null} onSave={handleSave} />);
  
  // Fill in the form and submit
  fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Task' } });
  fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Test Description' } });
  fireEvent.change(screen.getByLabelText(/End Date/i), { target: { value: '2024-12-31' } });
  fireEvent.click(screen.getByText('Create Task'));
  
  // Check if the onSave function is called
  expect(handleSave).toHaveBeenCalledWith({
    id: null,
    title: 'Test Task',
    description: 'Test Description',
    endDate: '2024-12-31',
    status: 'Pending',
    owner: null,
  });
});
