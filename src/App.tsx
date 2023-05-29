import {useEffect, useState} from 'react'
import './App.css'
import Navbar from '../src/scenes/navbar/navbar'
import {SelectedPage} from "@/shared/types";
import Home from "@/scenes/home/home";
import Benefits from "@/scenes/benefits/benefits"
import ContactUs from "@/scenes/contactUs/ContactUs";
import Footer from "@/scenes/footer/Footer";


function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
    useEffect(() => {
        const handleScroll = () => {
            switch (window.scrollY) {
                case 0:
                    setIsTopOfPage(true);
                    setSelectedPage(SelectedPage.Home);
                    break;
                default:
                    setIsTopOfPage(false);
                    break;
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


  return (
    <div className="app bg-gray-20 bg-">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        <Home setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage}/>
        <Footer/>
    </div>
  )
}

export default App
