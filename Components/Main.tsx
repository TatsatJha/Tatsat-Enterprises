import React, { MouseEventHandler, useRef } from 'react';
import LearnMoreBtn from './MainHome/LearnMoreBtn';
import Tagline from './MainHome/TagLine';
import Content from './MainHome/Content';
import axios from 'axios';
import Blogs from "./MainWriting/Blogs"
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';

const makeBlog = ()=>{
  axios.post("http://localhost:3000/api/blog", {title: "test1", content:"test2"})
}


export const MainHome = () => {  
  const myRef = React.createRef<HTMLInputElement>()
  const executeScroll = () => myRef.current!.scrollIntoView()   

  return <div className="w-full bg-gray-900 bg-gradient-to-b text-stone-300 pt-20 font-montserrat">
      <Tagline/>

      <div className='flex justify-evenly mt-64'>
        <LearnMoreBtn linkTo='writing'></LearnMoreBtn>
        <LearnMoreBtn linkTo='dev'></LearnMoreBtn>
        
      </div>

      <div className='border-b-2 border-cyan-900 pb-32'>
        <div className='hover:brightness-150 hover:translate-y-2 duration-300 ease-in-out'>
          <button className='block font-light text-4xl text-cyan-700 mt-48 w-fit mr-auto ml-auto' onClick={executeScroll}>
            More About Me
          </button>
          <BsChevronDown className='mr-auto ml-auto text-cyan-700 text-5xl'></BsChevronDown>
        </div>
      </div>
      <div ref={myRef}>
        <Content />
      </div>
    </div>;
};

export const MainWriting = () => {
  return <div className="h-screen w-full bg-gray-900 bg-gradient-to-b text-stone-300 pt-20">
    <button className='p-6 bg-orange-700' onClick={makeBlog}> Make Blog Entry </button>
    <Blogs></Blogs>
  </div>;
};

export const MainDev = () => {
  return <div className="h-screen w-full bg-gray-900 bg-gradient-to-b text-stone-300 pt-20">
</div>;
};