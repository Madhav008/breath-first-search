import React, { useState } from 'react'

const Background = ({onNext}) => {
    const [image, setImage] = useState('/profile.png')
    const caputreImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader()

        reader.readAsDataURL(file)
        reader.onloadend = function () {
            setImage(reader.result)
        }

    }
    return (
        <div className='flex flex-col justify-between items-center h-screen max-h-96 w-[320px] m-auto mt-[200px] '>
            <div className='flex flex-col items-center'>
                <h1 className='font-bold text-2xl'>📚 First things first...</h1>
                <h2 className='text-xl font-light text-gray-400'>Tell us a bit about yourself.</h2>
            </div>
            {/* Profile Image */}
            <div className="flex flex-col justify-center items-center w-sm h-[88px] ">
                <img className='h-[64px] w-[64px] mx-[20px] border-solid border-2 border-sky-500 rounded-lg bg-slate-900' src={image} alt="Profile" />
                {/* <input >Add a Photo</input> */}
                <input className='hidden' onChange={caputreImage} id="avatar" type="file" />
                <label className="flex mt-2 text-sm text-center text-gray-500 dark:text-gray-400" htmlFor="avatar">Add a Photo</label>
            </div>

            {/* Select Inputs */}
            <div className='w-full flex flex-col items-start'>
                <label for="major" className="block mb-2 text-sm font-medium">What's your major?</label>
                <select id="major" className=" bg-secondary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Select a major</option>
                    <option value="CS">Computer Science</option>
                    <option value="CE">Computer Engennering</option>
                    <option value="Phy">Physics</option>
                    <option value="Math">Mathematics</option>
                    <option value="other">Other </option>
                </select>
            </div>
            <div className='w-full flex flex-col items-start'>
                <label for="major" className="block mb-2 text-sm font-medium">What's your preferred language?</label>
                <select id="major" className=" bg-secondary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-secondary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Select a language</option>
                    <option value="Java">Java</option>
                    <option value="Pyton">Python</option>
                    <option value="Cpp">C++</option>
                </select>
            </div>
            <div className='flex flex-col items-center'>
                <button onClick={onNext} className='md:flex lg:flex bg-indigo-600 ml-2'>Next</button>

            </div>
        </div>
    )
}

export default Background
