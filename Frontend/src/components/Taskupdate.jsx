import React, { useState } from "react";

const TaskUpdate = () => {
  // Initial state for tasks
  const [tasks, setTasks] = useState([
    {
      srNo: 1,
      task: "Design homepage UI",
      assignBy: "John Doe",
      understoodHelp: "Understood",
      ETA: "2024-11-30",
      query: "",
      requiredTime: "2 hours",
      taskStatus: "In Progress",
      comment: "",
    },
    {
      srNo: 2,
      task: "Fix login bug",
      assignBy: "Jane Smith",
      understoodHelp: "Help Needed",
      ETA: "2024-11-28",
      query: "Need more details on the bug.",
      requiredTime: "1 hour",
      taskStatus: "Pending",
      comment: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][field] = value;
    setTasks(updatedTasks);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Task Updates</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-left">Sr No</th>
              <th className="border border-gray-300 p-2 text-left">Task</th>
              <th className="border border-gray-300 p-2 text-left">Assigned By</th>
              <th className="border border-gray-300 p-2 text-left">
                Understood/Help
              </th>
              <th className="border border-gray-300 p-2 text-left">ETA</th>
              <th className="border border-gray-300 p-2 text-left">Query</th>
              <th className="border border-gray-300 p-2 text-left">Required Time</th>
              <th className="border border-gray-300 p-2 text-left">Task Status</th>
              <th className="border border-gray-300 p-2 text-left">Comment</th>
              <th className="border border-gray-300 p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{task.srNo}</td>
                <td className="border border-gray-300 p-2">{task.task}</td>
                <td className="border border-gray-300 p-2">{task.assignBy}</td>
                <td className="border border-gray-300 p-2">
                  <select
                    className="w-full border border-gray-300 p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={task.understoodHelp}
                    onChange={(e) =>
                      handleInputChange(index, "understoodHelp", e.target.value)
                    }
                  >
                    <option value="Understood">Understood</option>
                    <option value="Help Needed">Help Needed</option>
                  </select>
                </td>
                <td className="border border-gray-300 p-2">{task.ETA}</td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={task.query}
                    onChange={(e) =>
                      handleInputChange(index, "query", e.target.value)
                    }
                    placeholder="Enter query"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  {task.requiredTime}
                </td>
                <td className="border border-gray-300 p-2">
                  <select
                    className="w-full border border-gray-300 p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={task.taskStatus}
                    onChange={(e) =>
                      handleInputChange(index, "taskStatus", e.target.value)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={task.comment}
                    onChange={(e) =>
                      handleInputChange(index, "comment", e.target.value)
                    }
                    placeholder="Enter comment"
                  />
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() =>
                      alert(`Meeting requested for Task ${task.srNo}`)
                    }
                  >
                    Ask for Meeting
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskUpdate;
