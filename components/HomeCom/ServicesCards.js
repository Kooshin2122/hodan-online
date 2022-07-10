import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function ServicesCards({ id, image = 'Tv.jpg', label, NumberOfBrands = 7, description, details }) {
    const router = useRouter()

    const getDetails = () => {
        router.push({
            pathname: `/${id}`,
            query: {
                id: id,
                label: label,
            }
        })
    }

    return (
        <div
            onClick={getDetails}
            className='h-fit min-h-[55vh] rounded-lg shadow group cursor-pointer'>
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
                    {description}
                </p>
                <div className='flex justify-between items-center'>
                    <h1 className='text-lg'>
                        {NumberOfBrands} Brands
                    </h1>
                    <Link href='/'>
                        <p className='text-blue-500 text-lg cursor-pointer active:scale-105'>
                            More Details...
                    </p>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default ServicesCards
