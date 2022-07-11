import React from 'react'
import Cart from '../components/Cart'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import ParternshipCards from '../components/parternship/ParternshipCards'
import SignUpForm from '../components/SignUpForm'
import apiRequest from '../Server/ApiRequest'
import { useCustomHook } from '../service/Context'

function paternship({ parternShipData }) {
    const { cartToggle, signUpToggle, loginToggle } = useCustomHook()

    return (
        <div className='h-fit min-h-[100vh] bg-gray-50'>
            <Header />
            <section>
                {cartToggle && <Cart />}
                {signUpToggle && <SignUpForm />}
                {loginToggle && <LoginForm />}
            </section>
            <section className='w-[70%] sm:w-[85%] overflow-auto m-auto py-14 sm:py-10 pb-28'>
                <h1 className='text-3xl font-normal text-center mb-10'>Our Parternship</h1>
                <div className='overflow-auto grid grid-cols-1 sm:grid-cols-3 gap-10'>
                    {
                        parternShipData?.map((value, index) => {
                            return (
                                <ParternshipCards {...value} key={index} />
                            )
                        })
                    }
                </div>
            </section>
            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    let data;
    const response = await apiRequest.get('/parternship')
        .catch(error => console.log('error ayaa dhacay', error))
    if (response) {
        data = response.data
    }
    return {
        props: {
            parternShipData: data
        }
    }
}

export default paternship


