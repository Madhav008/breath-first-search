import React,{useState} from 'react'
import CompaySection from '../../components/CompaySection'
import Hero from '../../components/Hero'
import LoginModal from '../../components/Modal'
import Navbar from '../../components/Navbar'

const Home = () => {
    const [login, setlogin] = useState(false)

    function showModal() {
        setlogin(true); 
        console.log("Madhav")   
    }

    return (
        <div className=' scrollbar-hide'>
           <Navbar login={showModal}/>
            <Hero show={login}/>
            <CompaySection/>
            {/* <LoginModal/> */}
        </div>
    )
}

export default Home

