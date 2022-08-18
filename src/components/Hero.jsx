import React from 'react'
import LoginModal from './Modal'
import { useSelector } from 'react-redux/es/exports'
const Hero = () => {
    const show = useSelector((state)=>state.loginModal);
    
    return (
        <>
            <div className="h-max/2 max-w-[1200px] mx-auto my-8 flex md:flex-row items-center">
                {/* left-side */}
                <div className=' max-w flex flex-col items-start justify-between  mx-4' >
                    <h1 className='font-bold text-4xl py-8'>Learn Algorithms Together</h1>
                    <div className='flex flex-col md:flex-row items-center my-4'>
                        <div className='flex flex-col items-start justify-between'>
                            <h2 className='font-bold p-2 '>Join a room</h2>
                            <p className='text-dimWhite p-2'>Join or create a room, invite your friends, and get ready to solve problems together.</p>
                        </div>
                        <div className='flex flex-col items-start justify-between'>
                            <h2 className='font-bold p-2 '>Start the room</h2>
                            <p className='text-dimWhite p-2'>You'll all get the same coding question to solve. Only you can see your editor.</p>
                        </div>
                        <div className='flex flex-col items-start justify-between'>
                            <h2 className='font-bold p-2 '>Solve Problems</h2>
                            <p className='text-dimWhite p-2'>Chat and solve questions together. Once you're done, you can browse other people's solutions</p>
                        </div>
                    </div>
                    <div className='my-2'>
                        <div className='flex items-center'>
                            <div className='bg-secondary md:flex lg:flex items-center px-2 lg:w-[300px] rounded-xl'>
                                <input className='bg-transparent px-2 py-[5px] focus:outline-none' type="text" placeholder='Enter the email' />
                            </div>
                            <button className='md:flex lg:flex bg-indigo-600 ml-2'>Get Started</button>
                        </div>
                        <p className='text-dimWhite my-2'>It's Free and always will be</p>
                    </div>
                </div>
                {/* right-side */}

                <img className='w-[500px] hidden md:flex  object-cover' src="/left.png" alt="background image" />

            </div>

        </>
    )

    
}

export default Hero