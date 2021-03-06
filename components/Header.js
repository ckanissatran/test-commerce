import React from 'react'
import Nav from './Nav'

export default function Header() {
    const [hidden, toggleHidden] = React.useState(true)

    return (
        <div className="p-3 pb-6 text-center bg-gradient-to-b from-black to-gray-800">
            <div onClick={() => toggleHidden(!hidden)} className='pt-1 float-left hover:opacity-50 cursor-pointer md:hidden' style={{width: '1.75rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <h1 className="pb-4">Some Website Title</h1>
            <Nav hidden={hidden}/>
        </div>
    )
}
