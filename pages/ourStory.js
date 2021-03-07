import Image from 'next/image'

export default function OurStory() {
    
    return (<>
        <div>Hello you are on the our story page</div>

        <Image
            src='/img2.jpg' 
            alt="Girl lifting"
            width={680}
            height={400}
            layout='responsive'
        />
        {/* <Image
            className='animate-pulse' 
            src='/img1.jpg' 
            alt="Girl lifting"
            width={680}
            height={400}
            layout='responsive'
        />
        <Image
            className='animate-pulse' 
            src='/img5.jpg' 
            alt="Girl lifting"
            width={680}
            height={400}
            layout='responsive'
        />

        <Image
            className='animate-pulse' 
            src='/img3.jpg' 
            alt="Girl lifting"
            width={680}
            height={400}
            layout='responsive'
        />

        <Image
            className='animate-pulse' 
            src='/img4.jpg' 
            alt="Girl lifting"
            width={680}
            height={400}
            layout='responsive'
        /> */}



    </>
    )
}
