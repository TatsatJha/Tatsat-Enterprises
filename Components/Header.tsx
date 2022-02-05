import React, { SetStateAction, useEffect, useState } from 'react';
import SideBar from "./SideBar"

type pageProp= {
  page: string
}

export const HomeHeader = () => {
  return <div> 
      <h1 className= {`text-7xl font-extralight text-center border-b-4 border-b-cyan-600 p-8 bg-slate-900 text-gray-100 bg-gradient-to-r from-gray-900 via-cyan-600 to-gray-900 font-sans`}>
        <span className='block animate-fadeUp hover:brightness-75 duration-1000 ease-in-out'>
            Tatsat Jha
        </span>
      </h1>
    <SideBar/>
  </div>;
};


export const WritingHeader = () => {
  return <div> 
      <h1 className= {`text-7xl font-extralight text-center border-b-4 border-b-orange-600 p-8 bg-slate-900 text-gray-100 bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900`}>
      <span className='block animate-fadeUp'>
            Tatsat Jha
        </span>
      </h1>
    <SideBar/>
  </div>;
};

export const DevHeader = () => {
  return <div> 
      <h1 className= {`text-7xl font-extralight text-center border-b-4 border-b-blue-600 p-8 bg-slate-900 text-gray-100 bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900`}>
      <span className='block animate-fadeUp'>
            Tatsat Jha
        </span>
      </h1>
    <SideBar/>
  </div>;
};
