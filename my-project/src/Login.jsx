/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault(); 
        try {
            const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
            console.log('Login success:', res.data);
            
            localStorage.setItem('token', res.data.token);

            navigate('/Home'); 
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
        }
    };

    return (
    <div className='justify-center content-center h-[100vh] bg-[#242424] md:w-[70vw] lg:w-[100vw]'>
    <div className='md:ml-[25vw] ml-[7vw] md:w-[50vw] w-[87vw] rounded-[1rem]'>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
        Log in to MUSIC
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
        <div className="rounded-md shadow-sm -space-y-px">
        <div className='mt-[4rem]'>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block md:w-[30rem] w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:ml-[5rem] ml-[4.5vw]"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block md:w-[30rem] w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-[1rem] md:ml-[5rem] ml-[4.5vw]"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        </div>
        <div>
        <button
            type="submit"
            className="group relative md:w-[30rem] w-[20rem] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:ml-[5rem] ml-[4.5vw]">
            Log in
        </button>
        </div>
        </form>
        <div className="flex flex-col space-y-4 mt-6">
        <button className="md:w-[30rem] w-[20rem] flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 md:ml-[5rem] ml-[4.5vw]">
        Log in with Google
        </button>
        <button className="md:w-[30rem] w-[20rem] flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 md:ml-[5rem] ml-[4.5vw]">
        Log in with Facebook
        </button>
        <button className="md:w-[30rem] w-[20rem] flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 md:ml-[5rem] ml-[4.5vw]">
        Log in with Apple
        </button>
        </div>
        <div className="text-center mt-4">
        <a href="Sign up" className="font-medium text-indigo-600 hover:text-indigo-500">
        Don't have an account? Sign up
        </a>
        </div>
    </div>
    </div>
    );
}

export default Login;
