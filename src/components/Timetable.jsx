import React from 'react';

const Timetable = () => {
  return (
    <div className="bg-blue-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-700">Class Timetable</h2>
          <p className="mt-2 text-lg text-gray-600">Check out our class schedule below.</p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-200">
                <th className="py-2 px-4 text-left text-blue-700">Time</th>
                <th className="py-2 px-4 text-left text-blue-700">Mon</th>
                <th className="py-2 px-4 text-left text-blue-700">Tue</th>
                <th className="py-2 px-4 text-left text-blue-700">Wed</th>
                <th className="py-2 px-4 text-left text-blue-700">Thu</th>
                <th className="py-2 px-4 text-left text-blue-700">Fri</th>
                <th className="py-2 px-4 text-left text-blue-700">Sat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border border-blue-200">8:00 AM</td>
                <td className="py-2 px-4 border border-blue-200">Class 1</td>
                <td className="py-2 px-4 border border-blue-200">Class 2</td>
                <td className="py-2 px-4 border border-blue-200">Class 3</td>
                <td className="py-2 px-4 border border-blue-200">Class 4</td>
                <td className="py-2 px-4 border border-blue-200">Class 5</td>
                <td className="py-2 px-4 border border-blue-200">Class 6</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Timetable;
