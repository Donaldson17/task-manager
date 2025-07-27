import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      dueDate,
      completed: false
    };

    try {
      await axios.post('http://localhost:3001/tasks', newTask);
      navigate('/');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="add-task">
      <h2>Add a New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;