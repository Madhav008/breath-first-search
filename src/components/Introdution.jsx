import React from 'react'

const Introdution = ({onNext}) => {
  return (
    <div className='flex flex-col justify-between items-center h-screen max-h-96 max-w-md m-auto mt-[200px] '>
      <div className='flex flex-col items-center'>
        <h1 className='font-bold text-4xl'>🖐️ Hey Madhav</h1>
        <h2 className='text-xl font-light text-gray-400'>Welcome to breathfirstsearch!</h2>
      </div>
      <p className=''><span className='font-bold'>breathfirstsearch</span> is a place to solve algorithms problems with others real-time. Our goal is to help you master algorithms and to ace any coding interviews.</p>
      <div className='flex flex-col items-center'>
        <p>You can choose different languages, 4 problem difficulty levels, and solve over 1,000 problems.</p>
      </div>
      <div className='flex flex-col items-center'>
        <p>We just need a little bit more info to help you get started.</p>
      </div>
      <div className='flex flex-col items-center'>
        <button onClick={onNext} className='md:flex lg:flex bg-indigo-600 ml-2'>Next</button>

      </div>
    </div>
  )
}

export default Introdution