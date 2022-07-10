import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { BsCartPlusFill } from 'react-icons/bs'
import { useCustomHook } from '../service/Context'
import CartCards from './DetailsPage/CartCards'
import DetailsCard from './DetailsPage/DetailsCard'
import RegularBtn from './RegularBtn'
import { useRouter } from 'next/router'

function Cart({ image = 'Micro.jpg', label = 'Label', description, Customer }) {
    const router = useRouter()
    const { showOrHideCart, cartData, cartTotal, setCartTotal, user, setUser, showOrHideLoginForm, setOrder } = useCustomHook()

    const getPaymentPage = () => {
        if (user.companyName == '') showOrHideLoginForm()

        router.push({
            pathname: `/paymentPage`,
            query: {
                cartTotal
            }
        })

        setOrder(cartData)
        showOrHideCart()
    }

    return (
        <div className='w-[100%] h-fit min-h-[91vh] fixed bottom-0 z-50 bg-slate-800/80'>
            <div className='w-[100%] sm:w-[40%] absolute right-0 bottom-0 h-[91vh] overflow-auto bg-white shadow-md'>
                <div className='h-[9vh] flex items-center justify-between sticky top-0 bg-gray-100 text-xl p-5 z-50 font-medium uppercase'>
                    <BsCartPlusFill />
                    <h1>Your Cart</h1>
                    <VscChromeClose
                        onClick={showOrHideCart}
                        className='cursor-pointer text-slate-800 text-2xl'
                    />
                </div>

                <div className='w-[90%] max-h-[70vh] mt-5 overflow-auto m-auto grid grid-cols-1'>
                    {
                        cartData.length ? cartData.map((data, index) => {
                            return (
                                <CartCards {...data} key={index} />
                            )
                        }) : ''
                    }

                </div>
                <div className='w-[100%] h-[16vh] bg-gray-100 absolute bottom-0 p-3'>
                    <div className='w-[100%] flex justify-between items-center text-2xl px-3'>
                        <h1>Sub Total</h1>
                        <h1>${cartTotal}</h1>
                    </div>
                    <RegularBtn
                        clickHandler={getPaymentPage}
                        label={cartData.length > 1 ? 'Register All' : 'Register'}
                        customStyle={'w-[100%] text-white mt-4 py-5 uppercase shadow-xs'}
                    />
                </div>


            </div>
        </div>
    )
}

export default Cart
