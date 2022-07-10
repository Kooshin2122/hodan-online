import React from 'react'
import RegularBtn from '../RegularBtn'
function Panel() {
    return (
        <div className='w-[100%] h-[93vh] flex justify-around items-center p-5 mainBgColor text-white'>
            <div className='sm:w-[60%] px-5 text-center '>
                <h1 className='text-3xl sm:text-5xl uppercase font-bold space-y-32 mb-3'>
                    Welcome to <span className='text-rose-500'>Hodan Online</span> adverticement
                </h1>
                <RegularBtn
                    label='OUR SERVICES'
                    customStyle={'mt-7 text-sm sm:text-lg'}
                    width={'sm:w-[30%]'}
                    bgColor={'bg-white text-slate-700'}
                />
                <p className='mt-14'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                    culpa ducimus vel, animi magnam quod, quo id cupiditate nihil rem
                    natus odit vitae necessitatibus dolor officia similique ab dolore
                    fugit.
                </p>
                <p>More than five</p>
            </div>

        </div>
    )
}


export default Panel
