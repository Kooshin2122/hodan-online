import React from 'react'

function ParternshipCards({ id, image = 'Tv.jpg', companyName = 'Hormuud', email = 'Hormuud@gmail.com', phoneNumber = 617889900, price = 200 }) {
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
                <div className='flex justify-between items-center '>
                    <h1 className='text-lg font-medium text-gray-500'>
                        Company Name
                    </h1>
                    <h1 className='text-lg text-gray-500'>
                        {companyName}
                    </h1>
                </div>
                <div className='flex justify-between items-center '>
                    <h1 className='text-lg font-medium text-gray-500'>
                        Phone Number
                    </h1>
                    <h1 className='text-lg text-left text-gray-500'>
                        {phoneNumber}
                    </h1>
                </div>
                <div className='flex justify-between items-center '>
                    <h1 className='text-lg font-medium text-gray-500'>
                        Email
                    </h1>
                    <h1 className='text-lg text-left text-gray-500'>
                        {email}
                    </h1>
                </div>
                <div className='flex justify-between items-center '>
                    <h1 className='text-lg font-medium text-gray-500'>
                        Price
                    </h1>
                    <h1 className='text-lg text-left text-gray-500'>
                        {`$${price}/m`}
                    </h1>
                </div>

            </div>
        </div>
    )

}

export default ParternshipCards
