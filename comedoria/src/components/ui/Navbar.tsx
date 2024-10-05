'use client';
import Image from 'next/image'
import { Logo } from '../../app/assets'
import { Button } from "@/components/ui/button"
import "../../app/globals.css";
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter();

  const handleClientClick = () => {
    router.push('/customer-login'); 
  };

  const handleEmployeeClick = () => {
    router.push('/staff-login');
  };

  return (
    <nav className="flex justify-between items-center p-4 w-full bg-background fixed top-0 left-0 z-50">
      <div className="flex items-center justify-start">
        <Image
          src={Logo}
          alt={"Logo"}
          className="w-36 h-auto ml-12"
        />
      </div>
      <div>
        <Button size="lg" variant="btnGreen" className="mr-2 rubik-600" onClick={handleClientClick}>
          Área do Cliente →
        </Button>
        <Button size="lg" variant="btnWine" className="mr-12 rubik-600" onClick={handleEmployeeClick}>
          Área do Funcionário →
        </Button>
      </div>
    </nav>
  )
}
