
import Navbar from './../components/Navbar';
import Hero from './../components/Hero';
import AiTypes from './../components/AiTypes';
import AiBenefits from './../components/AiBenefits';
import Contact from './../components/Contact';
import Footer from './../components/Footer';
export default function Home() {
  return (
    <>
    <Navbar/>
    <main>
        <Hero/>
        <AiTypes/>
        <AiBenefits/>
        <Contact/>
    </main>
    <Footer/>
    </>
  )
}