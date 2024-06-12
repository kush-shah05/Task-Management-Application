// src/App.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders App component and toggles theme', () => {
  render(<App />);
  
  // Check if the Create Task button is rendered
  expect(screen.getByText('Create Task')).toBeInTheDocument();
  
  // Check if the theme toggle button works
  const toggleButton = screen.getByText(/Dark Mode/i);
  fireEvent.click(toggleButton);
  expect(screen.getByText(/Light Mode/i)).toBeInTheDocument();
});

test('allows user to switch roles and create task', async () => {
  render(<App />);
  
  // Select admin from the dropdown
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'admin' } });
  
  // Open the modal to create a task
  fireEvent.click(screen.getByText('Create Task'));
  
  // Fill in the form and submit
  fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Task' } });
  fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Test Description' } });
  fireEvent.change(screen.getByLabelText(/End Date/i), { target: { value: '2024-12-31' } });
  fireEvent.click(screen.getByText('Create Task'));

  // Wait for the modal to close
  await waitFor(() => {
    expect(screen.queryByText('Create Task')).not.toBeInTheDocument();
  });
  
  // Check if the task is created
  await waitFor(() => {
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });
});
