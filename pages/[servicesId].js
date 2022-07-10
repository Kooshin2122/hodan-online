import { useRouter } from 'next/router';
import React, { useMemo } from 'react'
import Cart from '../components/Cart';
import DetailsCard from '../components/DetailsPage/DetailsCard'
import Header from '../components/Header'
import apiRequest from '../Server/ApiRequest';
import { useCustomHook } from '../service/Context';

function DetailsPage({ allServices }) {
    const router = useRouter()
    const { label, id } = router.query;
    const { cartToggle } = useCustomHook();

    const services = useMemo(() => {
        return allServices?.filter((data) => {
            return data.id == id;
        })
    })

    const detail = services[0].details ? services[0].details : [0];

    return (
        <div className='w-[100%] h-fit min-h-[100vh] bg-gray-50 text-slate-700'>
            <Header />
            <section>
                {
                    cartToggle && <Cart />
                }
            </section>
            <section className='w-[70%] sm:w-[85%] m-auto py-10 pb-28'>
                <h1 className='text-2xl sm:text-3xl mb-8'>{label}</h1>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
                    {
                        detail.map((value, index) => {
                            return (
                                <DetailsCard {...value} key={index} />
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
            allServices: data
        }
    }
}

export default DetailsPage
