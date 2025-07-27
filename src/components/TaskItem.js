function TaskItem({ task }) {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
    </div>
  );
}

export default TaskItem;