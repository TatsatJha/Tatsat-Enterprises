import React from 'react';
import Link from 'next/link'

type linkProps = {
    linkTo:string
}

function SideBarButton(props: linkProps) {
  return <div>
    <Link href={`/${props.linkTo}`}>
      <a className={`${props.linkTo}-link`}>{props.linkTo}</a>
    </Link>
  </div>;
}

export default SideBarButton;
