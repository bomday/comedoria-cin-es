import Link from 'next/link'
import Image from 'next/image'
import {Logo} from '../../app/assets'
import { Button } from "@/components/ui/button"
import "../../app/globals.css";

export default function Navbar() {

  return (
    <nav className="flex justify-between items-center p-4 w-full bg-background fixed top-0 left-0 z-50">
      <div className="flex items-center justify-start">
        <Image
          src={Logo}
          alt={"Logo"}
          className="w-36 h-auto ml-12"
        />
      <Link href="/landing-page">
        <div className="text-[#000000] text-3xl font-bold">Comedoria</div>
      </Link>
      </div>
      <div> 
        <Button size="lg" variant="btnGreen" className="mr-2 rubik-600">Área do Cliente →</Button>
        <Button size="lg" variant="btnWine" className="mr-12 rubik-600">Área do Funcionário →</Button>
      </div>
    </nav>
  )
}