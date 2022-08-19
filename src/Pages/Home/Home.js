import React from 'react'
import CompaySection from '../../components/CompaySection'
import Hero from '../../components/Hero'
import LoginModal from '../../components/Modal'
import Navbar from '../../components/Navbar'
import SignupModal from '../../components/SignupModal'

const Home = () => {

    return (
        <div className=' h-max w-full'>
           <Navbar />
            <Hero />
            <CompaySection/>
            {/* <LoginModal/> */}
            <SignupModal/>
        </div>
    )
}

export default Home

