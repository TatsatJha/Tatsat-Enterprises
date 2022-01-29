import React, { Component, FunctionComponent, ReactElement } from 'react';
import Link from 'next/link'

type linkProps = {
    linkTo:string,
    icon: ReactElement
}

function SideBarButton(props: linkProps) {
  return <div>
    <Link href={`/${props.linkTo}`}>
      <a className={`${props.linkTo}-link`}> {props.icon}</a>
    </Link>
  </div>;
}

export default SideBarButton;
