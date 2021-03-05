import React from 'react'
import Link from 'next/link'

export default function Layout({children}) {
    return (
        <>
         <nav>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/ourStory'>Our Story</Link>
                </li>
                <li>
                    <Link href='/ourTeam'>Our Team</Link>
                </li>
                <li>
                    <Link href='/programs'>Programs</Link>
                </li>
                <li>
                    <Link href='/merch'>Merch</Link>
                </li>
                <li>
                    <Link href='/gallery'>Gallery</Link>
                </li>
                <li>
                    <Link href='/contactUs'>Contact Us</Link>
                </li>
                <li>
                    <Link href='/login'>Login</Link>
                </li>
                <li>
                    <Link href='/cart'>Cart Icon</Link>
                </li>
            </ul>
        </nav>
          {children}  
        </>
    )
}
