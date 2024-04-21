import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';

function Why() {
  return (
    <section className="bg-black text-light py-5 text-center">
      <h5 className="text-blue-700">WHY CHOOSE US?</h5>
      <h3>PUSH YOUR LIMITS FORWARD</h3>

      <div className="flex flex-wrap justify-center mx-auto max-w-6xl px-4">
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 py-3">
          <div className="flex items-center justify-center mb-3 rounded-full bg-white p-3">
            <FaHeartbeat color="blue" size={40} />
          </div>
          <h5 className="text-lg font-semibold">Modern Equipment</h5>
          <p className="text-gray-500">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.</p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 px-4 py-3">
          <div className="flex items-center justify-center mb-3 rounded-full bg-white p-3">
            <FaHeartbeat color="blue" size={40} />
          </div>
          <h5 className="text-lg font-semibold">Healthy Nutrition Plan</h5>
          <p className="text-gray-500">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.</p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 px-4 py-3">
          <div className="flex items-center justify-center mb-3 rounded-full bg-white p-3">
            <FaHeartbeat color="blue" size={40} />
          </div>
          <h5 className="text-lg font-semibold">Professional Training Plan</h5>
          <p className="text-gray-500">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.</p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 px-4 py-3">
          <div className="flex items-center justify-center mb-3 rounded-full bg-white p-3">
            <FaHeartbeat color="blue" size={40} />
          </div>
          <h5 className="text-lg font-semibold">Unique to Your Needs</h5>
          <p className="text-gray-500">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.</p>
        </div>
      </div>
    </section>
  );
}

export default Why;
