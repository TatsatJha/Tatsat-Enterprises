import React, { SetStateAction, useEffect, useState } from 'react';
import SideBar from "./SideBar"

type pageProp= {
  page: string
}

function Header(props: pageProp) {
  // const [Theme, setTheme] = useState("teal");
  // useEffect(() => {
  //   console.log(Theme)
  // }, [Theme]);
  // const themeHandler = (color: string)=>{
  //   setTheme(color)
  // }
  
  // let color:String = ""
  // color = (props.page === "/dev") ? "blue" : props.page === "/writing" ? "orange" : "teal"
  // console.log(color)
  
  return <div> 
        <h1 className= {`text-5xl font-medium text-center border-b-4 border-b-teal-900 p-8 bg-slate-900 text-teal-700`}>
          Tatsat Jha
        </h1>
    <SideBar/>
    </div>;
}

export default Header;
