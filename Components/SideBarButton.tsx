import React, { Component, FunctionComponent, ReactElement } from 'react';
import Link from 'next/link'

type linkProps = {
    linkTo:string,
    icon: ReactElement,
}

function SideBarButton(props: linkProps) {
  return <div className={`${props.linkTo}-link`}>
    <Link href={`/${props.linkTo}`}>
      <a> {props.icon}</a>
    </Link>
  </div>;
}

export default SideBarButton;
