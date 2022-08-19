import React from 'react'
import { setEmail } from '../store/emailSlice'
import { useDispatch } from 'react-redux'
import { show } from '../store/signupModalSlice'
import { useFormik } from 'formik';

const Hero = () => {
    const dispatch = useDispatch()


    const onSubmit = async (values, actions) => {
        dispatch(setEmail(values.email));
        dispatch(show())
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    }

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit,
    });

    return (
        <>
            <div className="h-max/2 max-w-[1200px] mx-auto my-8 flex md:flex-row items-center">
                {/* left-side */}
                <div className=' max-w flex flex-col items-start justify-between  mx-4' >
                    <h1 className='font-bold text-4xl py-8'>Learn Algorithms Together</h1>
                    <div className='flex flex-col md:items-start md:flex-row items-start my-4'>
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
                            <form className="flex" onSubmit={handleSubmit}>
                                <div className=' bg-secondary md:flex lg:flex items-center px-2 lg:w-[300px] rounded-xl'>
                                    <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className='h-max bg-transparent px-2 py-[5px] focus:outline-none' type="text" placeholder='Enter the email' />
                                    {errors.email && touched.email && <p className=" peer-invalid:visible text-red-700 font-light">{errors.email}</p>}
                                </div>
                                <button disabled={isSubmitting} type="submit" className=' md:flex lg:flex bg-indigo-600 ml-2'>Get Started</button>
                            </form>
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