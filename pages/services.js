import React from 'react'
import Cart from '../components/Cart';
import Header from '../components/Header'
import ServicesCards from '../components/HomeCom/ServicesCards';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import apiRequest from '../Server/ApiRequest';
import { useCustomHook } from '../service/Context';

function Services({ services }) {
    const { cartToggle, signUpToggle, loginToggle } = useCustomHook()
    return (
        <div className='h-fit min-h-[100vh] bg-gray-50'>
            <Header />
            <section>
                {cartToggle && <Cart />}
                {signUpToggle && <SignUpForm />}
                {loginToggle && <LoginForm />}
            </section>
            <section className='w-[70%] sm:w-[85%] overflow-auto m-auto py-14 pb-28'>
                <h1 className='text-3xl font-normal text-center mb-10'>Services</h1>
                <div className='overflow-auto grid grid-cols-1 sm:grid-cols-3 gap-10'>
                    {
                        services?.map((value, index) => {
                            return (
                                <ServicesCards {...value} key={index} />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export async function getServerSideProps() {
    let data;
    const response = await apiRequest.get('/services')
        .catch(error => console.log('error ayaa dhacay', error))
    if (response) {
        data = response.data
    }
    return {
        props: {
            services: data
        }
    }
}

export default Services

