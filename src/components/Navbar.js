import React from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineCodepenCircle, AiOutlineGlobal, AiOutlineCrown } from 'react-icons/ai'
import { show } from '../store/loginModalSlice'
import { setEmail } from '../store/emailSlice'
import { useFormik } from 'formik';

const Navbar = () => {
    const dispatch = useDispatch();


    const handleLoginModal = (() => {
        dispatch(show())
    })

    const onSubmit = async (values, actions) => {
        dispatch(setEmail(values.email));
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
                    <p className='font-bold text-sm mr-4 flex'><AiOutlineGlobal size={20} className='mx-2 font-bold' /> Problems</p>
                    <p className='font-bold text-sm mr-4 flex'><AiOutlineCrown size={20} className='mx-2 font-bold' />Leaderboard</p>
                </div>
            </div>
            {/* right side */}
            <div className='flex items-center'>
                <button className='bg-dimBlue  px-4 border-secondary mr-4' onClick={() => handleLoginModal()} >Log in</button>
                <form className="flex" onSubmit={handleSubmit}>
                    <div className='hidden bg-secondary md:flex lg:flex items-center px-2 lg:w-[300px] rounded-xl'>
                        <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className='h-max bg-transparent px-2 py-[5px] focus:outline-none' type="text" placeholder='Enter the email' />
                        {errors.email && touched.email && <p className=" peer-invalid:visible text-red-700 font-light">{errors.email}</p>}
                    </div>
                    <button disabled={isSubmitting} type="submit" className='hidden md:flex lg:flex bg-indigo-600 ml-2'>Get Started</button>
                </form>

            </div>

        </div>

    )
}

export default Navbar