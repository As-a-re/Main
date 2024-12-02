/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => { 
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div className="bg-[black] h-[100vh] w-[100vw]">
      <div className="hidden sm:block bg-[#383737] h-[30vh] w-[25vw] rounded-[0.8rem]">
          <p className="text-[white] pt-[1rem] ml-[3rem]">MUSIC</p>
          <Link to='Home'><p className="text-[white] mt-[2rem] ml-[3rem]">HOME</p></Link>
          <p className="text-[white] mt-[2rem] ml-[3rem]">SEARCH</p>
      </div>
      <div className="hidden sm:block bg-[#383737] h-[67vh] w-[25vw] mt-[1rem] rounded-[0.8rem]">
          <p className="text-[white] pt-[1rem] ml-[3rem] font-bold">Your Library</p>
        </div>
      
      <div className="bg-[#383737] h-[100vh] md:w-[74vw] w-[100vw] overflow-y-auto  rounded-[0.8rem] md:mt-[-100vh] md:ml-[26vw]">
        <div className="bg-[#606060] md:w-[72.7vw] w-[100vw] h-[10vh] flex items-center rounded-[1rem]">
        <img src='../images/menu.jpg' alt='bg' onClick={handleClick} className="md:hidden ml-[1rem] mt-[0rem] h-auto w-[5vw] cursor-pointer"></img>
    {showDiv && (
      <div className='absolute bg-[black] top-0 left-0 h-[100vh] w-[40vw] text-[aqua] flex flex-col justify-between'>
      <div className="bg-[#383737] h-[30vh] w-[40vw] rounded-[0.8rem] ml-[0vw] mt-[0vh]">
      <img src='../images/back.jpg' alt='bg' onClick={handleClick} className="h-[5vh] w-[5vw] ml-[1vw] mt-[1vh] "></img>
              <p className="text-[white] pt-[1rem] ml-[3rem]">MUSIC</p>
              <Link to='Home'><p className="text-[white] mt-[2rem] ml-[3rem]">HOME</p></Link>
              <p className="text-[white] mt-[2rem] ml-[3rem]">SEARCH</p>
            </div>
            <div className="bg-[#383737] h-[70vh] w-[40vw] mt-[1vh] ml-[0vw] rounded-[0.8rem]">
                <p className="text-[white] pt-[1rem] ml-[3rem] font-bold">Your Library</p>
              </div></div>
    )}
        
        <Link to='Sign up'><p className="text-[white] ml-[60vw]">Signup</p></Link>
        <Link to='Login'><p className="text-[white] ml-[3vw]">Login</p></Link>
        </div>
        <p className="text-[white] font-bold text-3xl ml-[1rem] pt-[2rem]">Artists</p>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] rounded-full ml-[1rem] mt-[2rem] bg-cover'
        style={{ backgroundImage: `url(/images/photo1.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] rounded-full md:ml-[12rem] ml-[9rem] md:mt-[-10rem] mt-[-7rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg1.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] rounded-full md:ml-[23rem] ml-[17rem] md:mt-[-10rem] mt-[-7rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg2.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='hidden sm:block w-[10rem] h-[10rem] rounded-full ml-[34rem] mt-[-10rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg3.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='hidden sm:block w-[10rem] h-[10rem] rounded-full ml-[45rem] mt-[-10rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg4.jpg)` }}>
        </div>
        </Link>
        
        <p className="text-[white] font-bold text-3xl mt-[5rem] ml-[1rem]">Praises</p>
        <Link to='/Praises'>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] ml-[1rem] mt-[2rem] bg-cover'
        style={{ backgroundImage: `url(/images/photo2.jpg)` }}>
        </div>
        </Link>
        <Link to='/Praises'>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] md:ml-[12rem] ml-[9rem] md:mt-[-10rem] mt-[-7rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg4.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] md:ml-[23rem] ml-[17rem] md:mt-[-10rem] mt-[-7rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg3.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='hidden sm:block w-[10rem] h-[10rem] ml-[34rem] mt-[-10rem] bg-cover'
        style={{ backgroundImage: `url(/images/music1.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='hidden sm:block w-[10rem] h-[10rem] ml-[45rem] mt-[-10rem] bg-cover'
        style={{ backgroundImage: `url(/images/photo2.jpg)` }}>
        </div>
        </Link>
        
        <p className="text-[white] font-bold text-3xl mt-[5rem] ml-[1rem]">Hymnals</p>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] ml-[1rem] mt-[2rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg2.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] md:ml-[12rem] ml-[9rem] md:mt-[-10rem] mt-[-7rem] bg-cover'
        style={{ backgroundImage: `url(/images/photo1.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] md:ml-[23rem] ml-[17rem] md:mt-[-10rem] mt-[-7rem] bg-cover'
        style={{ backgroundImage: `url(/images/photo2.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='hidden sm:block w-[10rem] h-[10rem] ml-[34rem] mt-[-10rem] bg-cover'
        style={{ backgroundImage: `url(/images/music1.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='hidden sm:block w-[10rem] h-[10rem] ml-[45rem] mt-[-10rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg4.jpg)` }}>
        </div>
        </Link>
        
        <p className="text-[white] font-bold text-3xl mt-[5rem] ml-[1rem]">Choruses</p>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] ml-[1rem] mt-[2rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg1.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] md:ml-[12rem] ml-[9rem] md:mt-[-10rem] mt-[-7rem] bg-cover'
        style={{ backgroundImage: `url(/images/music1.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] md:ml-[23rem] ml-[17rem] md:mt-[-10rem] mt-[-7rem] bg-cover'
        style={{ backgroundImage: `url(/images/photo1.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='hidden sm:block w-[10rem] h-[10rem] ml-[34rem] mt-[-10rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg2.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='hidden sm:block w-[10rem] h-[10rem] ml-[45rem] mt-[-10rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg3.jpg)` }}>
        </div>
        </Link>
      
        <p className="text-[white] font-bold text-3xl mt-[5rem] ml-[1rem]">Worship</p>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] ml-[1rem] mt-[2rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg4.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] md:ml-[12rem] ml-[9rem] md:mt-[-10rem] mt-[-7rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg1.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] md:ml-[23rem] ml-[17rem] md:mt-[-10rem] mt-[-7rem] bg-cover'
        style={{ backgroundImage: `url(/images/music1.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='hidden sm:block w-[10rem] h-[10rem] ml-[34rem] mt-[-10rem] bg-cover'
        style={{ backgroundImage: `url(/images/photo2.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='hidden sm:block w-[10rem] h-[10rem] ml-[45rem] mt-[-10rem] bg-cover'
        style={{ backgroundImage: `url(/images/photo1.jpg)` }}>
        </div>
        </Link>
        
        <p className="text-[white] font-bold text-3xl mt-[5rem] ml-[1rem]">Devotional</p>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] ml-[1rem] mt-[2rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg1.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] md:ml-[12rem] ml-[9rem] md:mt-[-10rem] mt-[-7rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg2.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='md:w-[10rem] w-[7rem] md:h-[10rem] h-[7rem] md:ml-[23rem] ml-[17rem] md:mt-[-10rem] mt-[-7rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg3.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='hidden sm:block w-[10rem] h-[10rem] ml-[34rem] mt-[-10rem] bg-cover'
        style={{ backgroundImage: `url(/images/bg4.jpg)` }}>
        </div>
        </Link>
        <Link to=''>
        <div className='hidden sm:block w-[10rem] h-[10rem] ml-[45rem] mt-[-10rem] bg-cover'
        style={{ backgroundImage: `url(/images/photo2.jpg)` }}>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
