import React from 'react'
import { CgClose } from 'react-icons/cg'
import { FcGoogle } from 'react-icons/fc'
import apiRequest from '../Server/ApiRequest'
import { useCustomHook } from '../service/Context'
import RegularBtn from './RegularBtn'
import RegularField from './RegularFields'

function SignUpForm() {
    const { showOrHideSignUpForm, showOrHideLoginForm, setUser } = useCustomHook()

    const postNewTask = async (endPoint, newTask) => {
        await apiRequest.post(`${endPoint}`, newTask)
            .catch(error => console.log('error ayaa dhacay POST'))
    }

    const submit = async (e) => {
        e.preventDefault()
        const credintials = new FormData(e.target)
        const signUpInfo = {
            companyName: credintials.get('companyName'),
            email: credintials.get('email'),
            phoneNumber: credintials.get('phoneNumber')
        }
        postNewTask('/users', signUpInfo)
        setUser(signUpInfo)
        showOrHideSignUpForm()
    }

    const changeToLoginForm = () => {
        showOrHideLoginForm()
        showOrHideSignUpForm()
    }

    return (
        <div className='w-[100%] h-screen fixed top-0 z-50 bg-slate-800/40 flex justify-center items-center'>
            <form
                onSubmit={submit}
                className='taskFormAnimation w-[100%] sm:w-[40%] min-h-[75vh] max-h-[89vh] sm:max-h-[87vh] sm:min-h-[70vh] fixed bottom-14 sm:static overflow-scroll pb-10 bg-white rounded-lg'
                action="">
                <div className='flex justify-between items-center px-5 py-5 border-b text-slate-700 shadow-sm'>
                    <h1 className='text-base sm:text-xl font-semibold'>
                        Sign-Up Form
                    </h1>
                    <CgClose
                        onClick={showOrHideSignUpForm}
                        className='text-xl sm:text-2xl font-medium cursor-pointer active:scale-110' />
                </div>
                <div className='w-[90%] m-auto sm:mt-[5vh] mt-7 flex flex-wrap justify-between gap-y-6 sm:gap-y-7'>
                    <div className='w-[100%] flex gap-x-10 items-center p-3 bg-slate-100 rounded-md cursor-pointer active:scale-95'>
                        <FcGoogle className='text-xl' />
                        <h1 >
                            Continue with google
                        </h1>
                    </div>

                    <div className='w-[100%] flex items-center justify-between text-slate-500'>
                        <div className='border-b border-slate-500 w-[48%]'></div>
                        <h1 className='mb-1'>or</h1>
                        <div className='border-b border-slate-500 w-[48%]'></div>
                    </div>
                    <RegularField
                        name='companyName'
                        label='Company Name'
                        width='w-[100%]'
                    />
                    <RegularField
                        name='email'
                        type='email'
                        label='Email'
                        width='w-[100%]'
                    />
                    <RegularField
                        name='phoneNumber'
                        label='PhoneNumber'
                        type='number'
                        width='w-[100%]'
                    />
                    {/* <RegularField
                        label='Comform Password'
                        type='password'
                        width='w-[100%]'
                    /> */}
                    <div className='w-[100%] px-3 flex justify-end '>
                        <h1
                            onClick={changeToLoginForm}
                            className='text-violet-500 cursor-pointer active:scale-95'>
                            already have an account
                        </h1>
                    </div>

                    <RegularBtn
                        label='Sign-Up'
                        width='w-[25%] sm:w-[40%]'
                        customStyle='py-3 m-auto text-white font-medium'
                    />


                </div>
            </form>
        </div>
    )
}

export default SignUpForm
