import React from 'react'
import { VscChromeClose } from 'react-icons/vsc';
import { TiTick } from 'react-icons/ti';
import { useCustomHook } from '../../service/Context';

function CompletePayment() {
    const { showOrHideCompletePayment } = useCustomHook()
    return (
        <div className='w-[100%] h-[100vh] flex  justify-center items-center bg-slate-800/60 fixed top-0'>
            <div className='w-[35%] h-[30vh] bg-white'>
                <div className='flex justify-between items-center text-2xl bg-green-500 p-3 text-white border-b pb-1 '>
                    <h1>Payment</h1>
                    <VscChromeClose
                        onClick={showOrHideCompletePayment}
                        className='cursor-pointer' />
                </div>
                <div className='h-[80%] flex flex-col justify-center items-center text-xl text-green-500'>
                    <TiTick className='text-6xl mb-2' />
                    <h1>
                        Payment is completed
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default CompletePayment
