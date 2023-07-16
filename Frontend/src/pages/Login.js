import React, { useState } from 'react';
function Login() {


  return (
    
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-4 py-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-6">
          <img className="w-24 h-24 mb-4" src="https://dummyimage.com/100x100/000/fff" alt="Logo" />
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input type="email" name="email" id="email" autoComplete="email" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" id="password" autoComplete="current-password" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" name="remember-password" id="remember-password" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="remember-password" className="ml-2 block text-sm text-gray-700">Remember me</label>
            </div>
            <div>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign in</button>
          </div>
        </form>
        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-600 mr-1">Don't have an account?</span>
          <a href="/Signup" className="text-blue-600 hover:text-blue-500 font-medium">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
