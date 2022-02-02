import React from 'react';
import SideBarButton from './SideBarButton';
import { BsBook } from "react-icons/bs"
import { BsLaptop, BsHouse } from "react-icons/bs"

// type themeProp = {
//   theme: string,
//   onClick: Function
// }


function SideBar() {
  return <div className="side-bar">
    <SideBarButton icon={<BsHouse size = "36px"/>}linkTo=""></SideBarButton>
    <SideBarButton icon={<BsBook size = "36px"/>} linkTo="writing"></SideBarButton>
    <SideBarButton icon={<BsLaptop size = "36px"/>}linkTo="dev"></SideBarButton>
</div>;;
}

export default SideBar;
