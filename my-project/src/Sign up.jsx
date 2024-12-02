/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate(); 

    const handleSignup = async (e) => {
        e.preventDefault(); 
        try {
            const res = await axios.post('http://localhost:5000/users/signup', { name, email, password });
            console.log('Signup success:', res.data);

            navigate('/Login'); 
        } catch (error) {
            console.error('Signup failed:', error.response.data.message);
        }
    };

    return (
        <div className='justify-center content-center bg-[black] w-[100vw] h-[100vh] lg:w-[100vw]'>
        <div className='md:ml-[30vw] ml-[86vw] md:w-[50vw] w-[87vw] rounded-[1rem]'>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white md:ml-[-10rem] ml-[-160vw]">
        Create an account
        </h2>
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSignup}>
        <div className="rounded-md shadow-sm -space-y-px">
        <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
            id="name"
            name="name"
            type="text"
            required
            className="appearance-none rounded-none relative block md:w-[30rem] w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm md:ml-[0vw] ml-[-77vw]"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"/>
            </div>
            <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block md:w-[30rem] w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-[1rem] md:ml-[0vw] ml-[-77vw]"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"/>
            </div>
            <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            className="appearance-none rounded-none relative block md:w-[30rem] w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-[1rem] md:ml-[0vw] ml-[-77vw]"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"/>
            </div>
        </div>
        <div>
        <button
            type="submit"
            onClick={handleSignup}
            className="group relative md:w-[30rem] w-[20rem] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:ml-[0vw] ml-[-77vw]">
            Sign up  
        </button>
        </div>
        </form>
        <div className="flex flex-col space-y-4 mt-6">
        <button className="md:w-[30rem] w-[20rem] flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 md:ml-[0vw] ml-[-77vw]">
        Sign up with Google
        </button>
        <button className="md:w-[30rem] w-[20rem] flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 md:ml-[0vw] ml-[-77vw]">
        Sign up with Facebook
        </button>
        <button className="md:w-[30rem] w-[20rem] flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 md:ml-[0vw] ml-[-77vw]">
        Sign up with Apple
        </button>
        </div>
        <div className="text-center mt-4 md:ml-[-10rem] ml-[-160vw]">
        <Link to="/Login" className="font-medium text-indigo-600 hover:text-indigo-500">
        Already have an account? Log in
        </Link>
        </div>
        </div>
        </div> 
    );
};

export default Signup;
