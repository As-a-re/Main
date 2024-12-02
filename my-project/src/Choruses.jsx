// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import DropdownMenu from './Music';

const Choruses = () => {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };
  
  return (
    <div className="bg-[black] h-[100vh] w-[100vw]">
      <div className="hidden sm:block bg-[#a26f03] h-[30vh] w-[25vw] rounded-[0.8rem]">
          <p className="text-[white] pt-[1rem] ml-[3rem]">MUSIC</p>
          <p className="text-[white] mt-[2rem] ml-[3rem]">HOME</p>
          <p className="text-[white] mt-[2rem] ml-[3rem]">SEARCH</p>
      </div>
      <div className="hidden sm:block bg-[#a26f03] h-[67vh] w-[25vw] mt-[1rem] rounded-[0.8rem]">
          <p className="text-[white] pt-[1rem] ml-[3rem] font-bold">Your Library</p>
        </div>
    
    <div className="bg-gradient-to-b from-yellow-600 to-black-600  h-[100vh] md:w-[74vw] w-[100vw] overflow-y-auto  rounded-[0.8rem] md:mt-[-100vh] md:ml-[26vw]">
        <div className="bg-[#a26f03] md:w-[72.8vw] w-[100vw] h-[10vh] flex items-center rounded-[1rem]">
        <img src='../images/menu.jpg' alt='bg' onClick={handleClick} className="md:hidden ml-[1rem] mt-[0rem] h-auto w-[5vw] cursor-pointer"></img>
    {showDiv && (
      <div className='absolute bg-[black] top-0 left-0 h-[100vh] w-[40vw] text-[aqua] flex flex-col justify-between'>
      <div className="bg-[#a26f03] h-[30vh] w-[40vw] rounded-[0.8rem] ml-[0vw] mt-[0vh]">
      <img src='../images/back2.jpg' alt='bg' onClick={handleClick} className="h-[5vh] w-[5vw] ml-[1vw] mt-[1vh] "></img>
              <p className="text-[white] pt-[1rem] ml-[3rem]">MUSIC</p>
              <p className="text-[white] mt-[2rem] ml-[3rem]">HOME</p>
              <p className="text-[white] mt-[2rem] ml-[3rem]">SEARCH</p>
            </div>
            <div className="bg-[#a26f03] h-[70vh] w-[40vw] mt-[1vh] ml-[0vw] rounded-[0.8rem]">
                <p className="text-[white] pt-[1rem] ml-[3rem] font-bold">Your Library</p>
              </div></div>
    )}
        <p className="text-[white] ml-[60vw]">Signup</p>
        <p className="text-[white] ml-[3vw]">Login</p>
        </div>    
        <h1 className='text-[white] ml-[1rem] mt-[1.5rem] md:text-4xl text-3xl font-bold'>CHORUSES</h1>

        <div className='bg-[#a47614] md:h-[10vh] h-[10vh] md:w-[70vw] w-[100vw] md:ml-[2vw] ml-[0vw] mt-[3vh]'>
        <img src='../images/bg1.jpg' alt='image' className='md:w-[5vw] w-[15vw] md:h-[10vh] h-[8vh] md:pt-[0vh] pt-[2vh] md:ml-[0vw] ml-[2vw]'></img>
        <p className='text-[black] text-2xl md:ml-[7vw] ml-[19vw] md:mt-[-8vh] mt-[-7vh]'>Heavenly Sunlight - </p>
        <p className='text-[black] text-2xl md:ml-[25vw] ml-[19vw] md:mt-[-8vh] mt-[-3vh] pt-[2.5vh]'>Chorale Voices</p>
        <img src='../images/play1.jpg' alt='play' className='md:h-[5vh] h-[5vh] md:w-[5vw] w-[9vw] md:ml-[60vw] ml-[82vw] md:mt-[-5vh] mt-[-6vh]'></img>
        <div className='md:ml-[65vw] ml-[88vw] md:mt-[-6vh] mt-[-5.5vh]'>
        <DropdownMenu/>
        </div>
        </div>
        <div className='bg-[#a47614] md:h-[10vh] h-[10vh] md:w-[70vw] w-[100vw] md:ml-[2vw] ml-[0vw] mt-[3vh]'>
        <img src='../images/bg1.jpg' alt='image' className='md:w-[5vw] w-[15vw] md:h-[10vh] h-[8vh] md:pt-[0vh] pt-[2vh] md:ml-[0vw] ml-[2vw]'></img>
        <p className='text-[black] text-2xl md:ml-[7vw] ml-[19vw] md:mt-[-8vh] mt-[-7vh]'>Heavenly Sunlight - </p>
        <p className='text-[black] text-2xl md:ml-[25vw] ml-[19vw] md:mt-[-8vh] mt-[-3vh] pt-[2.5vh]'>Chorale Voices</p>
        <img src='../images/play1.jpg' alt='play' className='md:h-[5vh] h-[5vh] md:w-[5vw] w-[9vw] md:ml-[60vw] ml-[82vw] md:mt-[-5vh] mt-[-6vh]'></img>
        <div className='md:ml-[65vw] ml-[88vw] md:mt-[-6vh] mt-[-5.5vh]'>
        <DropdownMenu/>
        </div>
        </div>
        <div className='bg-[#a47614] md:h-[10vh] h-[10vh] md:w-[70vw] w-[100vw] md:ml-[2vw] ml-[0vw] mt-[3vh]'>
        <img src='../images/bg1.jpg' alt='image' className='md:w-[5vw] w-[15vw] md:h-[10vh] h-[8vh] md:pt-[0vh] pt-[2vh] md:ml-[0vw] ml-[2vw]'></img>
        <p className='text-[black] text-2xl md:ml-[7vw] ml-[19vw] md:mt-[-8vh] mt-[-7vh]'>Heavenly Sunlight - </p>
        <p className='text-[black] text-2xl md:ml-[25vw] ml-[19vw] md:mt-[-8vh] mt-[-3vh] pt-[2.5vh]'>Chorale Voices</p>
        <img src='../images/play1.jpg' alt='play' className='md:h-[5vh] h-[5vh] md:w-[5vw] w-[9vw] md:ml-[60vw] ml-[82vw] md:mt-[-5vh] mt-[-6vh]'></img>
        <div className='md:ml-[65vw] ml-[88vw] md:mt-[-6vh] mt-[-5.5vh]'>
        <DropdownMenu/>
        </div>
        </div>
        <div className='bg-[#a47614] md:h-[10vh] h-[10vh] md:w-[70vw] w-[100vw] md:ml-[2vw] ml-[0vw] mt-[3vh]'>
        <img src='../images/bg1.jpg' alt='image' className='md:w-[5vw] w-[15vw] md:h-[10vh] h-[8vh] md:pt-[0vh] pt-[2vh] md:ml-[0vw] ml-[2vw]'></img>
        <p className='text-[black] text-2xl md:ml-[7vw] ml-[19vw] md:mt-[-8vh] mt-[-7vh]'>Heavenly Sunlight - </p>
        <p className='text-[black] text-2xl md:ml-[25vw] ml-[19vw] md:mt-[-8vh] mt-[-3vh] pt-[2.5vh]'>Chorale Voices</p>
        <img src='../images/play1.jpg' alt='play' className='md:h-[5vh] h-[5vh] md:w-[5vw] w-[9vw] md:ml-[60vw] ml-[82vw] md:mt-[-5vh] mt-[-6vh]'></img>
        <div className='md:ml-[65vw] ml-[88vw] md:mt-[-6vh] mt-[-5.5vh]'>
        <DropdownMenu/>
        </div>
        </div>
        <div className='bg-[#a47614] md:h-[10vh] h-[10vh] md:w-[70vw] w-[100vw] md:ml-[2vw] ml-[0vw] mt-[3vh]'>
        <img src='../images/bg1.jpg' alt='image' className='md:w-[5vw] w-[15vw] md:h-[10vh] h-[8vh] md:pt-[0vh] pt-[2vh] md:ml-[0vw] ml-[2vw]'></img>
        <p className='text-[black] text-2xl md:ml-[7vw] ml-[19vw] md:mt-[-8vh] mt-[-7vh]'>Heavenly Sunlight - </p>
        <p className='text-[black] text-2xl md:ml-[25vw] ml-[19vw] md:mt-[-8vh] mt-[-3vh] pt-[2.5vh]'>Chorale Voices</p>
        <img src='../images/play1.jpg' alt='play' className='md:h-[5vh] h-[5vh] md:w-[5vw] w-[9vw] md:ml-[60vw] ml-[82vw] md:mt-[-5vh] mt-[-6vh]'></img>
        <div className='md:ml-[65vw] ml-[88vw] md:mt-[-6vh] mt-[-5.5vh]'>
        <DropdownMenu/>
        </div>
        </div>
        <div className='bg-[#a47614] md:h-[10vh] h-[10vh] md:w-[70vw] w-[100vw] md:ml-[2vw] ml-[0vw] mt-[3vh]'>
        <img src='../images/bg1.jpg' alt='image' className='md:w-[5vw] w-[15vw] md:h-[10vh] h-[8vh] md:pt-[0vh] pt-[2vh] md:ml-[0vw] ml-[2vw]'></img>
        <p className='text-[black] text-2xl md:ml-[7vw] ml-[19vw] md:mt-[-8vh] mt-[-7vh]'>Heavenly Sunlight - </p>
        <p className='text-[black] text-2xl md:ml-[25vw] ml-[19vw] md:mt-[-8vh] mt-[-3vh] pt-[2.5vh]'>Chorale Voices</p>
        <img src='../images/play1.jpg' alt='play' className='md:h-[5vh] h-[5vh] md:w-[5vw] w-[9vw] md:ml-[60vw] ml-[82vw] md:mt-[-5vh] mt-[-6vh]'></img>
        <div className='md:ml-[65vw] ml-[88vw] md:mt-[-6vh] mt-[-5.5vh]'>
        <DropdownMenu/>
        </div>
        </div>
        <div className='bg-[#a47614] md:h-[10vh] h-[10vh] md:w-[70vw] w-[100vw] md:ml-[2vw] ml-[0vw] mt-[3vh]'>
        <img src='../images/bg1.jpg' alt='image' className='md:w-[5vw] w-[15vw] md:h-[10vh] h-[8vh] md:pt-[0vh] pt-[2vh] md:ml-[0vw] ml-[2vw]'></img>
        <p className='text-[black] text-2xl md:ml-[7vw] ml-[19vw] md:mt-[-8vh] mt-[-7vh]'>Heavenly Sunlight - </p>
        <p className='text-[black] text-2xl md:ml-[25vw] ml-[19vw] md:mt-[-8vh] mt-[-3vh] pt-[2.5vh]'>Chorale Voices</p>
        <img src='../images/play1.jpg' alt='play' className='md:h-[5vh] h-[5vh] md:w-[5vw] w-[9vw] md:ml-[60vw] ml-[82vw] md:mt-[-5vh] mt-[-6vh]'></img>
        <div className='md:ml-[65vw] ml-[88vw] md:mt-[-6vh] mt-[-5.5vh]'>
        <DropdownMenu/>
        </div>
        </div><br></br>
    </div>
    </div>
  );
};

export default Choruses;