import React,{useState} from 'react'
import { AiOutlineCodepenCircle,AiOutlineGlobal ,AiOutlineCrown} from 'react-icons/ai'
const Navbar = ({login}) => {
   
    
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 
        '>
            {/* left side */}
            <div className='flex items-center '>
                <div className='cursor-pointer '>
                    <AiOutlineCodepenCircle size={30} />
                </div>
                <h1 className='text-lg px-2 font-serif'>
                    BreathFirstSearch
                </h1>
                <div className='hidden md:flex lg:flex px-2 items-center font-serif'>
                    <p className='font-bold text-sm mr-4 flex'><AiOutlineGlobal size={20} className='mx-2 font-bold'/> Problems</p>
                    <p className='font-bold text-sm mr-4 flex'><AiOutlineCrown size={20} className='mx-2 font-bold' />Leaderboard</p>
                </div>
            </div>
            {/* right side */}
            <div className='flex items-center'>
            <button className='bg-dimBlue  px-4 border-secondary mr-4' onClick={login()} >Log in</button>
            <div className='hidden bg-secondary md:flex lg:flex items-center px-2 lg:w-[300px] rounded-xl'>
                <input className='bg-transparent px-2 py-[5px] focus:outline-none' type="text" placeholder='Enter the email'/>
            </div>
            <button className='hidden md:flex lg:flex bg-indigo-600 ml-2'>Get Started</button>

            </div>

        </div>
      
    )
}

export default Navbar