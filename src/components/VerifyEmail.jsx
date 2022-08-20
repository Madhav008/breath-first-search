import React from 'react'
import { useSelector } from 'react-redux'

const VerifyEmail = () => {
    const email = useSelector((state) => state.email);

    return (
        <div className='flex flex-col justify-evenly items-center h-screen max-h-96 max-w-md m-auto mt-[200px] '>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-4xl'>📭 Verify Email</h1>
                <h2 className='text-xl font-light text-gray-400'>One last thing!</h2>
            </div>
            <div className='ml-auto max-w-sm flex items-center justify-ceter'>
                <p >Congrats on joining <span className='font-bold'>breathfirstsearch!</span> Lastly, check your inbox for a verification email from us.</p>
            </div>


            <div className='flex flex-row items-center w-full justify-center'>
                <div className='flex bg-secondary h-full  rounded-xl w-max'>
                    <span className='m-2 w-max mr-10'>{email}</span>
                </div>
                <button className='md:flex lg:flex bg-indigo-600 ml-2'>Resend</button>

            </div>
        </div>)
}

export default VerifyEmail