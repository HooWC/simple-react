import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#f0f0f0',
      marginBottom: '1rem'
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '1rem',
        margin: 0,
        padding: 0
      }}>
        <li>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({
              color: isActive ? '#1976d2' : '#666',
              textDecoration: 'none'
            })}
          >
            首页
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/tasks" 
            style={({ isActive }) => ({
              color: isActive ? '#1976d2' : '#666',
              textDecoration: 'none'
            })}
          >
            任务列表
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            style={({ isActive }) => ({
              color: isActive ? '#1976d2' : '#666',
              textDecoration: 'none'
            })}
          >
            关于
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;