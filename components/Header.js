import React, { useState } from 'react'
import { FcAdvertising } from 'react-icons/fc';
import { MdMenu } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { BsCartPlus } from 'react-icons/bs';

import NavBar from './NavBar';
import MobileNavBar from './MobileNavBar';
import { useCustomHook } from '../service/Context';
import { Avatar } from '@mui/material';


function Header() {
    const { showOrHideCart, cartData, user, showOrHideLoginForm } = useCustomHook()
    const [userIcon, setUserIcon] = useState(user.companyName)
    const userLogin = () => {
        showOrHideLoginForm()
    }
    return (
        <div className='w-[100%] h-fit sticky top-0 z-10 mainBgColor text-white flex justify-between items-center py-3 px-8'>
            <div className='flex gap-x-3 items-center text-xl'>
                <FcAdvertising />
                <span>Hodan</span>
            </div>
            <div>
                <NavBar />
                <MobileNavBar />
            </div>

            <div className='flex gap-x-5 items-center'>
                <h1
                    onClick={showOrHideCart}
                    className='text-2xl font-semibold cursor-pointer rounded-full shadow-2xl' >
                    <p className='text-sm px-1 rounded-full text-white bg-slate-800 absolute right-[14%] sm:right-[6%] top-2 sm:top-4'>
                        {cartData.length}
                    </p>
                    <BsCartPlus />
                </h1>

                <Avatar
                    onClick={userLogin}
                    className='bg-white text-slate-800 text-lg cursor-pointer'>
                    {userIcon ? userIcon[0] : '?'}
                </Avatar>

            </div>

        </div>
    )
}

export default Header
