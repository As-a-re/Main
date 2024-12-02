/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';

function App() {
  return (
    <div className="bg-cover bg-center bg-no-repeat md:h-screen h-[93vh] md:w-screen w-full bg-[url(/home.jpg)]" >
    <div className='w-[100vw] md:w-[100vw] h-[10vh] bg-[black] opacity-[0.5]'>
    <p className='text-[white] ml-[2vw] text-2xl font-bold pt-[1rem] md:pt-[0.4rem]'>MUSIC</p>
    <a href='Sign up'><p className='text-[gold] md:ml-[86vw] ml-[62vw] mt-[-2rem] text-2xl'>Signup</p></a>
    <a href='Login'><p className='text-[gold] md:ml-[94vw] ml-[85vw] text-2xl mt-[-2rem]'>Login</p></a>
    </div>
    <p className='text-[white] text-4xl ml-[2rem] mt-[10rem]'>STREAM AND LISTEN TO</p>
    <p className='text-[white] text-4xl ml-[2rem]'>CHRISTIAN MUSIC AT IT'S BEST</p>
    <p className='text-[aqua] md:text-[gold] text-1xl ml-[2rem] mt-[5rem]'>NEW HERE, CREATE AN ACCOUNT</p>
    <p className='text-[aqua] md:text-[gold] text-1xl ml-[2rem]'>TO ACCESS THE MUSIC</p>
    </div>
  );
}

export default App;
