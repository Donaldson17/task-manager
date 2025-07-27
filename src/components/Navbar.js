import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Task Manager</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Task</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;