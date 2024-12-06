import React from 'react';
import { FaHome, FaUser, FaCog, FaClipboardList, FaRegCalendarAlt, FaMoneyBillWave, FaUsers,FaFileSignature,FaNewspaper,FaGoogleDrive, FaTasks, FaPeopleArrows  } from 'react-icons/fa';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <div
 className={`bg-blue-900 text-white h-screen fixed top-10 left-0 p-10 transition-all duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      

      {/* Sidebar menu items */}
      <ul className="mt-5">
        <li className="mb-6">
          <a href="/Dashboard" className="flex items-center space-x-2 text-lg hover:text-blue-400">
            <FaHome /> <span className={`${sidebarOpen ? 'inline' : 'hidden'}`}>Dashboard</span>
          </a>
        </li>
        <li className="mb-6">
          <a href="/Profile" className="flex items-center space-x-2 text-lg hover:text-blue-400">
            <FaUser /> <span className={`${sidebarOpen ? 'inline' : 'hidden'}`}>Profile</span>
          </a>
        </li>
        
        <li className="mb-6">
          <a href="/Taskupdate" className="flex items-center space-x-2 text-lg hover:text-blue-400">
            <FaTasks  /> <span className={`${sidebarOpen ? 'inline' : 'hidden'}`}>Task Update</span>
          </a>
        </li>
        
        <li className="mb-6">
          <a href="/Team" className="flex items-center space-x-2 text-lg hover:text-blue-400">
            <FaPeopleArrows  /> <span className={`${sidebarOpen ? 'inline' : 'hidden'}`}>Team</span>
          </a>
        </li>
        <li className="mb-6">
          <a href="/Leaves" className="flex items-center space-x-2 text-lg hover:text-blue-400">
            <FaClipboardList /> <span className={`${sidebarOpen ? 'inline' : 'hidden'}`}>Leaves</span>
          </a>
        </li>
        <li className="mb-6">
          <a href="#" className="flex items-center space-x-2 text-lg hover:text-blue-400">
            <FaMoneyBillWave /> <span className={`${sidebarOpen ? 'inline' : 'hidden'}`}>Payroll</span>
          </a>
        </li>
        <li className="mb-6">
          <a href="/Event" className="flex items-center space-x-2 text-lg hover:text-blue-400">
            < FaRegCalendarAlt /> <span className={`${sidebarOpen ? 'inline' : 'hidden'}`}>Event</span>
          </a>
        </li>
        <li className="mb-6">
          <a href="/Attendance" className="flex items-center space-x-2 text-lg hover:text-blue-400">
            <FaUsers /> <span className={`${sidebarOpen ? 'inline' : 'hidden'}`}>Attendance</span>
          </a>
        </li>
        <li className="mb-6">
          <a href="#" className="flex items-center space-x-2 text-lg hover:text-blue-400">
            <FaFileSignature  /> <span className={`${sidebarOpen ? 'inline' : 'hidden'}`}>Feedback</span>
          </a>
        </li>
        <li className="mb-6">
          <a href="#" className="flex items-center space-x-2 text-lg hover:text-blue-400">
            <FaNewspaper  /> <span className={`${sidebarOpen ? 'inline' : 'hidden'}`}>Policy</span>
          </a>
        </li>
       
        <li className="mb-6">
          <a href="#" className="flex items-center space-x-2 text-lg hover:text-blue-400">
            <FaGoogleDrive  /> <span className={`${sidebarOpen ? 'inline' : 'hidden'}`}>Documents</span>
          </a>
        </li>
        <li className="mb-6">
          <a href="#" className="flex items-center space-x-2 text-lg hover:text-blue-400">
            <FaCog /> <span className={`${sidebarOpen ? 'inline' : 'hidden'}`}>Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
