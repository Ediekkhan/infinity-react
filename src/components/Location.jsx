import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';

function Location() {
  return (
    <div className="flex flex-col sm:flex-row bg-slate-500 text-white p-3 justify-evenly">
      <div className="flex items-center mb-2 sm:mb-0">
        <IoLocationOutline size={40} className="mr-2" />
        <span className="text-white font-semibold">
          Plot 89/91 chief ikye Ogbodo Street, <br />
          Ogbuodor Layout Ugwuaji Road. Enugu
        </span>
      </div>

      <div className="flex items-center mb-2 sm:mb-0">
        <FaPhone size={40} className="mr-2" />
        <span className="text-white font-semibold">
          +234 706 345 7718
        </span>
      </div>

      <div className="flex items-center text-white">
        <MdOutlineMail size={40} className="mr-2" />
        <span className="text-white font-semibold">
          <a href="mailto:" className='text-white text-decoration-none'>@ndaabasi.christantus@gmail.com</a>

        </span>
      </div>
    </div>
  );
}

export default Location;
