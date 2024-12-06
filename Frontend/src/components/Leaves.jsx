import React, { useState } from 'react';

const festivalLeaves = [
  { id: 1, Date: "01 Jan 2024", Day: "Monday", Festival: "New Year" },
  { id: 2, Date: "26 Jan 2024", Day: "Friday", Festival: "Republic Day" },
  { id: 3, Date: "25 Mar 2024", Day: "Monday", Festival: "Holi" },
  { id: 4, Date: "09 Apr 2024", Day: "Tuesday", Festival: "Gudi Padwa" },
  { id: 5, Date: "01 May 2024", Day: "Wednesday", Festival: "Maharashtra Day" },
  { id: 6, Date: "15 Aug 2024", Day: "Thursday", Festival: "Independence Day" },
  { id: 7, Date: "06 Sep 2024", Day: "Friday", Festival: "Ganesh Chaturthi" },
  { id: 8, Date: "02 Oct 2024", Day: "Wednesday", Festival: "Gandhi Jayanti" },
  { id: 9, Date: "01 Nov 2024", Day: "Friday", Festival: "Diwali" },
  { id: 10, Date: "25 Dec 2024", Day: "Wednesday", Festival: "Christmas" },
];

const leaveTypes = [
  { id: 1, Type: "Casual Leaves", TotalLeaves: 24 },
  { id: 2, Type: "Public Holidays", TotalLeaves: 10 },
  { id: 3, Type: "Maternity Leave", TotalLeaves: 182 },
  { id: 4, Type: "Paternity Leave", TotalLeaves: 5 },
];

const LeaveForm = () => {
  const [selectedLeaveType, setSelectedLeaveType] = useState('');
   const [selectedHoliday, setSelectedHoliday] = useState('');

  // Handle leave type selection
  const handleLeaveTypeChange = (event) => {
    setSelectedLeaveType(event.target.value);
  };

  // Handle holiday selection
  const handleHolidayChange = (event) => {
    setSelectedHoliday(event.target.value);
  };

  // Generate leave options
  const leaveOptions = leaveTypes.map((leave) => ({
    value: leave.Type,
    label: `${leave.Type} - ${leave.TotalLeaves} Days`
  }));

  // Generate holiday options
  const holidayOptions = festivalLeaves.map((holiday) => ({
    value: holiday.Festival,
    label: `${holiday.Festival} (${holiday.Date})`
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-20">
      {/* Table for Leave Types */}
      <div className="overflow-x-auto pt-5 ">
        <h2 className="text-lg font-bold mb-4">Leave Types</h2>
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr className="text-lg font-semibold bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Leave Type</th>
              <th className="border border-gray-300 px-4 py-2">Total Leaves</th>
              <th className="border border-gray-300 px-4 py-2">Leaves Taken</th>
              <th className="border border-gray-300 px-4 py-2">Remaining Leaves</th>
            </tr>
          </thead>
          <tbody>
            {leaveTypes.map((leave) => (
              <tr key={leave.id} className="text-sm font-medium">
                <td className="border border-gray-300 px-4 py-2">{leave.Type}</td>
                <td className="border border-gray-300 px-4 py-2">{leave.TotalLeaves}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {/* <input
                    type="number"
                    className="w-full border border-gray-400 p-1"
                    placeholder="0"
                    onChange={(e) => {
                      const taken = Number(e.target.value);
                      const remaining = leave.TotalLeaves - taken;
                      // Dynamically update remaining leaves logic (use state in real applications)
                      console.log(`Remaining for ${leave.Type}: ${remaining}`);
                    }}
                  /> */}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {leave.TotalLeaves} {/* Placeholder for remaining leaves */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      {/* Table for Festival Leaves */}
      <div className="overflow-x-auto pt-5">
        <h2 className="text-lg font-bold mb-4">Festival Leaves</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="text-lg font-semibold bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Day</th>
              <th className="border border-gray-300 px-4 py-2">Festival</th>
            </tr>
          </thead>
          <tbody>
            {festivalLeaves.map((leave) => (
              <tr key={leave.id} className="text-sm font-medium">
                <td className="border border-gray-300 px-4 py-2">{leave.Date}</td>
                <td className="border border-gray-300 px-4 py-2">{leave.Day}</td>
                <td className="border border-gray-300 px-4 py-2">{leave.Festival}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>


      {/* Leave Application Form */}
      <div className="leave-form mt-10 bg-white border border-blue-500 shadow-lg shadow-slate-400">
        <h2 className="text-xl font-semibold my-10  text-center">Leave Application Form</h2>
       <div className='flex  justify-center min-h-screen w-full max-w-full'>
        <form className="leaveForm w-full max-w-xs">
          {/* Leave Type Dropdown */}
          <label htmlFor="leave-type" className="block mb-2">Choose Leave Type:</label>
          <select
            id="leave-type"
            value={selectedLeaveType}
            onChange={handleLeaveTypeChange}
            className="border border-gray-400 p-2 rounded mb-4 w-full max-w-xl"
          >
            <option value="">Select Leave Type</option>
            {leaveOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Holiday Dropdown */}
          {selectedLeaveType === 'Public Holidays' && (
            <>
            
              <label htmlFor="holiday"className="block mb-2">Choose Festival Holiday:</label>
              <select
                id="holiday"
                value={selectedHoliday}
                onChange={handleHolidayChange}
                 className="border border-gray-400 p-2 rounded mb-4 w-full "
              >
                <option value="">Select Holiday</option>
                {holidayOptions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </>
          )}

         
            <div>
            <p className="text-sm  text-gray-700">
              Selected Leave Type: <strong className=' px-4'>{selectedLeaveType}</strong>
            </p>
            </div>
            <div>
            <label htmlFor="start_date" className="block mb-2">Start Date:</label>
            <input type='Date'  className="border border-gray-400 p-2 rounded mb-4 w-full max-w-full"></input>
            </div>
            <div>
            <label htmlFor="end_date" className="block mb-2">End Date:</label>
            <input type='Date'  className="border border-gray-400 p-2 rounded mb-4 w-full max-w-xs"></input>
            </div>
            
            <div>
            <label htmlFor="Reason" className="block mb-2">Reason:</label>
            <textarea type='text '  className="border border-gray-400 p-2 rounded mb-4 w-full max-w-xs"></textarea>
            </div>
            
            
            
          <button type='submit'className="border border-white-400 px-7 py-2 rounded mb-4 bg-royalblue text-white hover:bg-green-600 " >Apply</button>
        
        </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveForm;
