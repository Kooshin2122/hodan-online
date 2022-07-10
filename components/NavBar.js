import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { RiCustomerServiceLine } from 'react-icons/ri';
import { AiOutlineTeam } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';



function NavBar() {
    const router = useRouter();
    const [active, setActive] = useState(false)

    return (
        <nav className='hidden sm:flex items-center gap-x-6 text-lg'>

            <Link href='/'>
                <span
                    className={`${router.pathname == '/' ? 'active' : ''} nav group`}>
                    <AiOutlineHome className='text-2xl group-hover:animate-bounce' />
                    <h1 className='group-active:scale-110'>Home</h1>
                </span>
            </Link>

            <Link href='/services'>
                <span className={`${router.pathname == '/services' ? 'active' : ''} nav group`}>
                    <RiCustomerServiceLine className='text-2xl group-hover:animate-bounce' />
                    <h1 className='group-active:scale-110'>Services</h1>
                </span>
            </Link>

            <Link href='/paternship'>
                <span className={`${router.pathname == '/paternship' ? 'active' : ''} nav group`}>
                    <AiOutlineTeam className='text-xl group-hover:animate-bounce' />
                    <h1 className='group-active:scale-110'>Paternship</h1>
                </span>
            </Link>

            <Link href='/about'>
                <span className={`${router.pathname == '/about' ? 'active' : ''} nav group`}>
                    <SiAboutdotme className='text-2xl group-hover:animate-bounce' />
                    <h1 className='group-active:scale-110'>About</h1>
                </span>
            </Link>

        </nav>
    )
}

export default NavBar
