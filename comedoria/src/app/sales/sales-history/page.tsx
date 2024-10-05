import NavbarStaff from '@/components/ui/Navbar-staff'
import Footer from '@/components/ui/footer'
import Forms from './history-sections/forms/forms'
import "@/app/globals.css"

export default function SalesHistory() {
  return (
    <>
      <NavbarStaff />
      <Forms />
      <Footer />
    </>
  )
}