import React from 'react';
import SideBar from './SideBar';
import { BsChevronDown } from 'react-icons/bs';

export const MainHome = () => {
  return <div className="h-screen w-full bg-gray-900 bg-gradient-to-b text-stone-300 pt-20">

      <h1 className =  "text-center font-light text-5xl border-cyan-700 border-4 w-fit mr-auto ml-auto p-10 text-stone-300 rounded-lg top-0 translate-y-4 duration-75 bg-gray-800 shadow-xl">
        I <span className='text-orange-700'>Write Fantasy Books</span> and <span className='text-blue-700'>Develop Software</span>
      </h1>
    
      <div className='flex justify-evenly mt-48'>
        <button className='border-orange-900 border-4 text-orange-900 bg-orange-600 p-5 text-2xl hover:-translate-y-2 duration-300 ease-in-out shadow-xl' > Learn More about My Writing </button>
        <button className='border-blue-900 border-4 text-blue-900 bg-blue-600 p-5 text-2xl hover:-translate-y-2 duration-300 ease-in-out shadow-xl' > Learn More about My Software </button>
      </div>

      <h2 className='text-center font-light text-4xl text-cyan-700 mt-56'>
        Learn More about Me
      </h2>
      <BsChevronDown className='mr-auto ml-auto text-cyan-700 text-5xl'></BsChevronDown>
    </div>;
};

export const MainWriting = () => {
  return <div className="h-screen w-full bg-gray-900 bg-gradient-to-b text-stone-300 pt-20">

</div>;
};

export const MainDev = () => {
  return <div className="h-screen w-full bg-gray-900 bg-gradient-to-b text-stone-300 pt-20">
</div>;
};