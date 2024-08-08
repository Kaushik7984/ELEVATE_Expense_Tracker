import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Auth/Dashboard';
import ProtectedRoute from './components/Auth/ProtectRoute';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              element={<Dashboard />}
            />
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;