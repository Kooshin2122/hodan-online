import { useRouter } from 'next/router';
import React from 'react'
import Cart from '../components/Cart';
import CartCards from '../components/DetailsPage/CartCards';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import CompletePayment from '../components/payment/CompletePayment';
import RegularBtn from '../components/RegularBtn';
import SingUpForm from '../components/SignUpForm';
import { useCustomHook } from '../service/Context';

function PaymentPage() {
    const { cartToggle, loginToggle, signUpToggle,
        cartTotal, order, user, cartData, completePayment, showOrHideCompletePayment } = useCustomHook();
    const paymentCompleted = () => {
        showOrHideCompletePayment()
    }
    return (
        <div className='w-[100%] h-fit min-h-[100vh] bg-gray-50/50 text-slate-700'>
            {completePayment && <CompletePayment />}
            <Header />

            <section>
                {cartToggle && <Cart />}
                {signUpToggle && <SingUpForm />}
                {loginToggle && <LoginForm />}
            </section>

            <section className='h-[100vh] flex justify-between items-center bg-gray-50'>
                <div className='w-[40%] h-full p-5 bg-gray-50 text-center'>
                    <h1 className='text-3xl'>
                        ORDERS LISTS
                    </h1>
                    <div className='w-[90%] max-h-[70vh] mt-5 overflow-auto m-auto grid grid-cols-1'>
                        {
                            cartData.length ? cartData.map((data, index) => {
                                return (
                                    <CartCards {...data} key={index} />
                                )
                            }) : ''
                        }

                    </div>
                </div>
                <div className='w-[60%] h-full bg-white flex justify-center items-center'>
                    <div className='w-[45%] h-[55vh] mainBgColor text-white p-10 text-center rounded-md'>
                        <h1 className='text-3xl'>REGISTER ORDERS</h1>
                        <p className='mt-14'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Expedita fugit quos vel iure eligendi voluptatibus asperiores
                            magnam quo quas autem magni, cupiditate sapiente blanditiis debitis
                            nobis quibusdam officia doloremque totam!</p>
                        <RegularBtn
                            clickHandler={paymentCompleted}
                            label={`Pay $${cartTotal}`}
                            bgColor='bg-white text-slate-800'
                            customStyle={'mt-20'}
                        />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default PaymentPage
