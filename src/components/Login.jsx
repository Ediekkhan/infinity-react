import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //login api authentication 
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container mx-auto max-w-md mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            required placeholder='Enter your email'
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            required placeholder="Enter password"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none">Login</button>
      </form>
      <div className='text-center mt-4 '>
            <span className=' line'>------------    or    ------------</span>
            
      </div>
      <div className="flex justify-center m-4">
        
     
        <button className="bg-red-600 text-white rounded-full p-2 mr-4">
          <FaGoogle size={24} />
        </button>
       
        <button className="bg-blue-700 text-white rounded-full p-2">
          <FaFacebook size={24} />
        </button>
      </div>
    </div>
  );
}

export default Login;
