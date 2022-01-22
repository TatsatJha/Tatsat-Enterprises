import React from 'react';
import Link from 'next/link'

function sideBar() {
  return <div className= "bg-slate-700 w-28 flex flex-col h-32 justify-center align-middle items-center  fixed top-1/2 -left-24 hover:translate-x-24 duration-300 hover:ease-in-out rounded-r-lg text-sm shadow-2xl">
    <Link href="/writing">Writing</Link>
    <Link href="/dev"> Development</Link>
  </div>;
}

export default sideBar;
