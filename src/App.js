// App.js
import React, { useState } from 'react';
import Registration from './components/Registration';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import UserDetails from './components/UserDetails';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Routes>
      {user ? (
        <Route path="/userdetails" element={<UserDetails user={user} onLogout={handleLogout} />} />
      ) : (
        <>
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        </>
      )}
    </Routes>
  );
};

export default App;
