// src/components/EmployeeList.jsx
import React, { useState } from "react";
import Modal from "./Modal";

const EmployeeList = () => {
  const [employees] = useState([
   
    { id: 1, name: "Harshada", position: "Developer", email: "harshada@example.com", phone: "1234567890" },
    { id: 1, name: "Ankita", position: "Developer", email: "Ankita@example.com", phone: "1234567890" },
    { id: 1, name: "Niraj", position: "Developer", email: "Niraj@example.com", phone: "1234567890" },
    { id: 1, name: "Rushabh", position: "Developer", email: "Rushabh@example.com", phone: "1234567890" },
    { id: 1, name: "Pallavi", position: "Developer", email: "Pallavi@example.com", phone: "1234567890" },
    
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  return (
    <div className="mx-auto p-10 pt-20"  >
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <div className="grid grid-cols-2 gap-4">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="border p-4 rounded-lg bg-white shadow hover:shadow-md cursor-pointer"
            onClick={() => handleCardClick(employee)}
          >
            <h2 className="text-lg font-semibold">{employee.name}</h2>
            <p>{employee.position}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <div className=" px-10 py-10">
            <h2 className="text-xl font-bold px-1 py-4">{selectedEmployee.name}</h2>
            <p className="px-1 py-1"><strong>Position:</strong> {selectedEmployee.position}</p>
            <p className="  px-1 py-1"><strong>Email:</strong>< span className="link link-hover" > {selectedEmployee.email}</span></p>
            <p className="  px-1 py-1"><strong>Phone:</strong><span className="link link-hover" > {selectedEmployee.phone}</span></p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
          
        </Modal>
      )}
    </div>
     
  );
};

export default EmployeeList;
