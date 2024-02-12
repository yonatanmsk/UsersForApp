import React, { useState, useEffect } from 'react';
import BackButton from './BackButton';
import LogoutButton from './LogoutButton';
import '../styles/UsersPage.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2 className="user-list-title">User List</h2>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.email}><strong className="user-name">{user.full_name}</strong> <span className="separator"> - </span> <strong className="user-email">{user.email}</strong></li>
        ))}
      </ul>
      <div className="button-container">
      <div className="button-center">
      <BackButton />
      <div className="button-space"></div>
      <LogoutButton/>
    </div>
    </div>
    </div>
    
  );
};

export default UserList;