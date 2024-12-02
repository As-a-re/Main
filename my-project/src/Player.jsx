/* eslint-disable no-unused-vars */
import React from 'react';
import { FiMenu, FiMusic, FiShuffle, FiSkipBack, FiPlay, FiSkipForward, FiRepeat } from 'react-icons/fi';

const MusicPlayer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="flex justify-between w-3/4 mt-10">
        <button>
          <FiMenu className="text-brown-500 text-2xl" />
        </button>
        <button>
          <FiMusic className="text-brown-500 text-2xl" />
        </button>
      </div>

      <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center mt-10">
        <span className="text-gray-500">Photo Here</span>
      </div>

      <h2 className="mt-5 text-xl font-semibold text-brown-600">Title of Song Here</h2>

      <div className="w-3/4 mt-5">
        <div className="w-full bg-gray-300 h-1">
          <div className="bg-brown-500 h-1" style={{ width: '50%' }}></div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-brown-600 text-sm">2:12</span>
          <span className="text-brown-600 text-sm">4:10</span>
        </div>
      </div>

      <div className="flex justify-between w-3/4 mt-10">
        <button>
          <FiShuffle className="text-brown-500 text-2xl" />
        </button>
        <button>
          <FiSkipBack className="text-brown-500 text-2xl" />
        </button>
        <button>
          <FiPlay className="text-brown-500 text-4xl" />
        </button>
        <button>
          <FiSkipForward className="text-brown-500 text-2xl" />
        </button>
        <button>
          <FiRepeat className="text-brown-500 text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
