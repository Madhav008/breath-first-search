import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { show } from '../store/signupModalSlice'
import { show as LoginModal } from '../store/loginModalSlice'

import { useFormik } from 'formik';
import { signupSchema } from "./schemas/schema";
import { setAuth } from '../store/authSlice';
import { useNavigate } from "react-router-dom";

const SignupModal = () => {
    const item = useSelector((state) => state.signUpModal)
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const handleModal = () => {
        dispatch(show());
    }

    const openLoginModal = () => {
        dispatch(show());
        dispatch(LoginModal())
    }

    let navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        let userData = null;


        userData = {
            fullname: values.name,
            username: values.username,
            email: values.email
        }
        dispatch(setAuth(userData))

        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();

        navigate("/register", { replace: true });

    };
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
            password: "",
            username: "",
            name: ""
        },
        validationSchema: signupSchema,
        onSubmit,
    });

    if (user.email != '') {
        values.email = user.email
    }
    return (
        <>
            <div className={!item ? 'hidden' : 'flex h-full bg-opacity-70 bg-black justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal'}>
                <div className="my-auto relative p-4 md:w-full max-w-md">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" onClick={() => handleModal()} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign Up to our platform</h3>
                            <form onSubmit={handleSubmit} className="space-y-6" action="#">
                                <div className={user.email ? 'hidden' : 'none'}>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
                                    {errors.email && touched.email && <p className=" peer-invalid:visible text-red-700 font-light">{errors.email}</p>}
                                </div>
                                <div>
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
                                    <input value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Jane Doe" required />
                                    {errors.name && touched.name && <p className=" peer-invalid:visible text-red-700 font-light">{errors.name}</p>}

                                </div>
                                <div>
                                    <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                                    <input value={values.username} onChange={handleChange} onBlur={handleBlur} type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="janedoe" required />
                                    {errors.username && touched.username && <p className=" peer-invalid:visible text-red-700 font-light">{errors.username}</p>}

                                </div>

                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                                    <input value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" name="password" id="password" placeholder="????????????????????????" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    {errors.password && touched.password && <p className=" peer-invalid:visible text-red-700 font-light">{errors.password}</p>}
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                        </div>
                                        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the Terms of Service and Privacy Policy</label>
                                    </div>
                                </div>
                                <button disabled={isSubmitting} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continue </button>

                            </form>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                <button onClick={openLoginModal} className="border-none m-0 p-0 text-blue-700 hover:underline dark:text-blue-500">Log in if you already have an account </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupModal