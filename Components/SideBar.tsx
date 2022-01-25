import React from 'react';
import SideBarButton from './SideBarButton';

function SideBar() {
return <div className="side-bar">
  <SideBarButton linkTo="writing"></SideBarButton>
  <SideBarButton linkTo="development"></SideBarButton>
</div>;;
}

export default SideBar;
