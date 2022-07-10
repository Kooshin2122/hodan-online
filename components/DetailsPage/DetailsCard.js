import React, { useState } from 'react'
import { useCustomHook } from '../../service/Context';

function DetailsCard({ id, image, label, description, price, isInCart }) {
    const [cartCheck, setCartCheck] = useState(isInCart)

    const cart = {
        id,
        image,
        label,
        description,
        price
    }

    const { cartTotal, setCartTotal, cartData, setCartData, showOrHideCart } = useCustomHook();

    const addToCart = () => {
        setCartData([...cartData, cart])
        setCartTotal(cartTotal + cart.price)
        setCartCheck(!cartCheck)
    }

    const removeFromCart = () => {
        const newCartData = cartData.filter((data) => data.id == id)
        if (newCartData.length > 0) {
            const newData = cartData.filter((data) => data.id !== id)
            setCartData(newData)
            setCartTotal(cartTotal - price)
            setCartCheck(!cartCheck)
        }
        else setCartCheck(!cartCheck)
    }

    return (
        <div className='h-fit min-h-[55vh] bg-white rounded-lg shadow group'>
            <div className='h-[31vh] overflow-hidden rounded-t-lg'>
                <img
                    src={image}
                    alt="Lama haayo"
                    className='rounded-t-lg group-hover:scale-125 duration-200'
                />
            </div>
            <div className='p-5 flex flex-col gap-y-3'>
                <h1 className='text-xl font-semibold'>
                    {label}
                </h1>
                <p className='h-[9vh] overflow-auto'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellendus quia quod facilis iusto omnis atque? Eligendi aliquid, praesentium quisquam maxime, temporibus earum repellat, sint a ducimus sapiente accusantium necessitatibus.
                </p>
                <div className='flex justify-between items-center'>
                    <h1 className='text-lg'>
                        {price}
                    </h1>

                    <p
                        onClick={cartCheck ? removeFromCart : addToCart}
                        className='text-blue-500 text-lg cursor-pointer active:scale-105'>
                        {cartCheck ? 'Remove From Cart' : 'Add to Cart'}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default DetailsCard
