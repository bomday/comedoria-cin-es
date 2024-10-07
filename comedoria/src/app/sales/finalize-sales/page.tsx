import NavbarStaff from '@/components/ui/Navbar-staff'
import Footer from '@/components/ui/footer'
import Forms from './finalize-sections/forms/forms'
import "@/app/globals.css"
import { Suspense } from 'react'

export default function FinalizeSales() {
  return (
    <>
      <NavbarStaff />
      <Suspense fallback={<div>Loading...</div>}> {/* Boundary de Suspense */}
        <Forms />
      </Suspense>
      <Footer />
    </>
  )
}