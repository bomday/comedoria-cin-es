import { Banner, Mission, Process, Contact } from './sections/index'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import "@/app/globals.css"

export default function LandingPage() {
  return (
    <>
      <Navbar/>

      <Banner/>
      <Mission/>
      <Process/>
      <Contact/>

      <Footer/>
    </>
  )
}