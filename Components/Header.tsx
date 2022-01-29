import React from 'react';

type page= {
  page: string
}

function Header(props: page) {
  const color:String = props.page === "/dev" ? "blue" : props.page === "/writing" ? "orange" : "teal"
  return <div> 
        <h1 className= {`text-5xl font-medium text-center border-b-4 border-b-${color}-900 p-8 bg-slate-900 text-${color}-700`}>
          Tatsat Enterprises
        </h1>
    </div>;
}

export default Header;
