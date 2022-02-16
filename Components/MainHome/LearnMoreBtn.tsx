import React from 'react';
import Link from 'next/link';


type linkProps = {
    linkTo:string
}

function LearnMoreBtn(props: linkProps) {
    if(props.linkTo === "writing"){
        return <div>
            <Link href={`/writing`}>
                <button className='border-orange-900 border-4 text-orange-900 bg-orange-600 p-5 text-2xl hover:-translate-y-2 duration-300 ease-in-out shadow-xl rounded-2xl' > 
                Learn More About My Writing
                </button>
            </Link>
        </div>;
    }
    else{
        return <div>
            <Link href={"/dev"}>
                <button className='border-blue-900 border-4 text-blue-900 bg-blue-600 p-5 text-2xl hover:-translate-y-2 duration-300 ease-in-out shadow-xl rounded-2xl' >
                    Learn More About My Software
                </button>
            </Link>
        </div>;
    }
}

export default LearnMoreBtn;
