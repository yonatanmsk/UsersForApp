import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './Components/RegisterPage';
import { Navigate } from 'react-router-dom';
import UserList from './Components/UsersPage';
import NavigateButton from './Components/NavigateButton';
import LoginPage from './Components/LoginPage';
import { AuthProvider } from './contexts/AuthContext';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <AuthProvider>
        <div className="App"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/UsersAppPic.jpg)`,
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh',
          }}>
          <Routes>
            <Route path="/" element={<Navigate to="/register" />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/users" element={isLoggedIn ? <UserList /> : <Navigate to="/login" />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          </Routes>

          {!isLoggedIn && (
            <div className="login-button-container">
              <NavigateButton targetRoute="/login" buttonText="Login" />
            </div>
          )}
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;