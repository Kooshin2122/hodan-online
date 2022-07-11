import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FcGoogle } from 'react-icons/fc'
import apiRequest from '../Server/ApiRequest'
import { useCustomHook } from '../service/Context'
import RegularBtn from './RegularBtn'
import RegularField from './RegularFields'

function LoginForm() {
    const { showOrHideLoginForm, showOrHideSignUpForm, setUser, user } = useCustomHook()
    const [loginResponse, setLoginResponse] = useState(false)

    const getAllUsers = async (endPoint) => {
        const response = await apiRequest.get(`${endPoint}`)
            .catch(error => console.log('error ayaa dhacay', error))
        if (response) {
            return response.data
        }
    }
    const submit = async (e) => {
        e.preventDefault()
        const credintials = new FormData(e.target)
        const loginInfo = {
            companyName: credintials.get('Company Name'),
            password: credintials.get('password')
        }
        let users = await getAllUsers('/users')

        users.map((data) => {
            if (data.password == loginInfo.password && data.companyName == loginInfo.companyName) {
                setUser(data)
                setLoginResponse(false)
                showOrHideLoginForm()
            }
            else setLoginResponse(true)
        })
    }


    const changeToSignUpForm = () => {
        showOrHideLoginForm()
        showOrHideSignUpForm()
    }

    return (
        <div className='w-[100%] h-screen fixed top-0 z-50 bg-slate-800/40 flex justify-center items-center'>
            <form
                onSubmit={submit}
                className='taskFormAnimation w-[100%] sm:w-[40%] min-h-[75vh] max-h-[95vh] sm:min-h-[70vh] fixed bottom-14 sm:static overflow-scroll pb-10 bg-white rounded-lg'
                action="">
                <div className='flex justify-between items-center px-5 py-5 border-b text-slate-700 shadow-sm'>
                    <h1 className='text-base sm:text-xl font-semibold'>
                        Login Form
                    </h1>
                    <CgClose
                        onClick={showOrHideLoginForm}
                        className='text-xl sm:text-2xl font-medium cursor-pointer active:scale-110' />
                </div>
                <div className='w-[90%] m-auto sm:mt-[5vh] mt-10 flex flex-wrap justify-between gap-y-7 sm:gap-y-7'>
                    <div className='w-[100%] flex gap-x-10 items-center p-3 bg-slate-100 rounded-md cursor-pointer active:scale-95'>
                        <h1 >
                            {loginResponse ? 'This is not exist please create new one' : 'please login your account'}
                        </h1>
                    </div>

                    <div className='w-[100%] flex items-center justify-between text-slate-500'>
                        <div className='border-b border-slate-500 w-[48%]'></div>
                        <h1 className='mb-1'>or</h1>
                        <div className='border-b border-slate-500 w-[48%]'></div>
                    </div>
                    <RegularField
                        name='Company Name'
                        label='Company Name'
                        width='w-[100%]'
                    />
                    <RegularField
                        name='password'
                        label='Password'
                        type='password'
                        width='w-[100%]'
                    />
                    <div className='w-[100%] px-3 flex justify-between '>
                        <h1
                            onClick={changeToSignUpForm}
                            className='text-violet-500 cursor-pointer active:scale-95'>
                            Create new account
                        </h1>
                        <h1 className='w-fit text-violet-500 cursor-pointer active:scale-95'>
                            Forget Password
                        </h1>
                    </div>
                    <div className='w-[100%] flex justify-center'>
                        <RegularBtn
                            label='Login'
                            width='w-[20%] sm:w-[40%]'
                            customStyle='py-3 text-white font-medium'
                        />
                    </div>

                </div>
            </form>
        </div>
    )
}

export default LoginForm
