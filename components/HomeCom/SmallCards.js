import { Avatar } from '@material-ui/core'
import React from 'react'

function SmallCards({ image = 'Tv.jpg', label, NumberOfBrands }) {
    return (
        <div className='flex h-[20%] gap-x-5 items-center bg-gray-100'>
            <img alt='NO image' src={image} variant='rounded' className='h-[100%]' />
            <div className=''>
                <h1>{label}</h1>
                <div className='flex gap-x-5 items-center'>
                    <h1>Brands</h1>
                    <h1>{NumberOfBrands}</h1>
                </div>
            </div>

        </div>
    )
}

export default SmallCards
