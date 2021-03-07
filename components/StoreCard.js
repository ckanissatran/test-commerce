import React from 'react'
import Image from 'next/image'

export default function StoreCard({src, alt, price}) {
    return (
        <div className='m-2 bg-gray-900'>
            <Image
                src={src} 
                alt={alt}
                width={700}
                height={700}
                layout='responsive'
            />
            <div className='flex flex-row flex-grow items-center'>
                <h1 className='flex-grow text-center'>${price}</h1>
                <button className='flex-grow p-2 bg-gradient-to-b from-blue-900 to-blue-500'>Add to Cart</button>
            </div>
        </div>
    )
}
