import Link from 'next/link'

export default function Nav({hidden}) {

    const getHidden = () => {
        if (hidden) return 'hidden'
        else return ''
    }

    return (
        <nav className={`${getHidden()} md:flex md:justify-between` }>
            <ul className="md:pl-8 md:flex md:justify-between md:space-x-8">
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
            </ul>

            <ul className="md:flex md:justify-between md:space-x-4">
                <li>
                    <Link href='/auth/login'>Login</Link>
                </li>
                <li className="flex justify-center">
                    <Link href='/cart'>
                        <div style={{width: '1.75rem'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                    </Link>
                </li>

            </ul>
        </nav>
    )
}
