import React from 'react';
import SideBarButton from './SideBarButton';
import { BsBook } from "react-icons/bs"
import { BsLaptop } from "react-icons/bs"

function SideBar() {
return <div className="side-bar">
  <SideBarButton icon={<BsBook size = "36px"/>} linkTo="writing"></SideBarButton>
  <SideBarButton icon={<BsLaptop size = "36px"/>}linkTo="development"></SideBarButton>
</div>;;
}

export default SideBar;
