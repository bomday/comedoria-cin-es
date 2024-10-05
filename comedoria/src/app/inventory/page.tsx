import NavbarStaff from '@/components/ui/Navbar-staff'
import Footer from '@/components/ui/footer'
import Forms from './sections/forms/forms'
import "@/app/globals.css"

export default function Inventory() {
  return (
    <>
      <NavbarStaff />
      <Forms />
      <Footer />
    </>
  )
}