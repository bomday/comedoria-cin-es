import NavbarStaff from '@/components/ui/Navbar-staff'
import Footer from '@/components/ui/footer'
import Forms from './history-sections/forms/forms'
import "@/app/globals.css"

export default function SalesHistory() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarStaff />
      <main className="flex-grow">
        <Forms />
      </main>
      <Footer />
    </div>
  )
}