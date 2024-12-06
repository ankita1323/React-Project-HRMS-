// src/App.jsx
import React, { useState, useEffect } from "react";

import LoginForm from "./components/LoginForm";
import Modal from "./components/Modal";
import TopBar from "./components/TopBar";

import Dashboard from "./components/Dashboard";
import Sidebar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Team from "./components/Team";
import Leaves from "./components/Leaves";
import Event from"./components/Event";
import Attendance from "./components/Attendance";
import Taskupdate from "./components/Taskupdate";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth) {
      setIsAuthenticated(JSON.parse(storedAuth));
    }
  }, []);
  // const handleLoginSuccess = () => {
  //   setIsAuthenticated(true);
  // };
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', true);
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
 

  return (
    <div className="min-h-screen bg-gray-100">
      {isAuthenticated ? (
        <>
            {
  
    <div className="flex h-screen">
    {/* Sidebar Section */}
    <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

    {/* Main Content Section */}
    <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-0'}`}>
      {/* Top Bar */}
      <TopBar toggleSidebar={toggleSidebar} />

      {/* Content Area */}
      <div className="p-6 bg-gray-100 flex-1">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path ="/Leaves" element ={<Leaves/>}/>
          <Route path ="/Event" element = {<Event/>}/>
        <Route path="/Attendance" element ={<Attendance/>}/>
        <Route path="/Taskupdate" element ={<Taskupdate/>}/>
          {/* Add other routes here */}
        </Routes>
      </div>
    </div>
  </div>}
          
        </>
      ) : (
        <Modal isOpen={true}>
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </Modal>
      )}
    </div>
  );
}

export default App;
