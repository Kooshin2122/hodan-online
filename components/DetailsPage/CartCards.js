import React, { useEffect, useMemo } from 'react'
import { useCustomHook } from '../../service/Context';
import { VscChromeClose } from 'react-icons/vsc'
import { Avatar } from '@material-ui/core';


function CartCards({ id, image, label, price }) {
    const { cartData, setCartData, cartTotal, setCartTotal } = useCustomHook();

    const removeFromCart = (e) => {
        const newCartData = cartData.filter((data) => data.id !== id)
        setCartData(newCartData)
        setCartTotal(cartTotal - price)
    }

    return (
        <div className='w-[95%] m-auto h-fit py-5 border-b border-slate-800/20 flex justify-between items-center'>
            <div className='w-[60%] flex gap-x-5 items-center text-slate-900'>
                <Avatar sizes='' variant='rounded' alt="Remy Sharp" src={image} />
                <h1>{label}</h1>
            </div>
            <div className='flex gap-x-5 items-center text-slate-800'>
                <h1>${price}/M</h1>
                <button
                    onClick={removeFromCart}
                    className='cursor-pointer bg-gray-100 p-2 text-base active:scale-95 hover:text-gray-500'>
                    <VscChromeClose />
                </button>
            </div>
        </div>
    )
}

export default CartCards
