import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/footer'
import Forms from './sections/forms/forms'
import "@/app/globals.css"

export default function StaffLogin() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Forms />
      </div>
      <Footer />
    </div>
  )
}
