import NavbarStaff from '@/components/ui/Navbar-staff'
import Footer from '@/components/ui/footer'
import Forms from './finalize-sections/forms/forms'
import "@/app/globals.css"

export default function FinalizeSales() {
  return (
    <>
      <NavbarStaff />
      <Forms />
      <Footer />
    </>
  )
}