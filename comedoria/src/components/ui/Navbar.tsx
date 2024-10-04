import { Button } from "@/components/ui/button"
import Image from 'next/image'
import logozinhoImage from '../../../public/assets/logo_icon.png'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="flex justify-between items-center p-4 bg-white w-full">
      <div className="flex items-center">
        <Image
          src={logozinhoImage}
          alt="Comedoria Logo"
          width={50} 
          height={12} 
          className="h-auto max-h-[2.5rem] mr-2"
        />
      <Link href="/landing-page">
        <div className="text-[#000000] text-3xl font-bold">Comedoria</div>
      </Link>
      </div>
      <div>
        <Button variant="outline" className="mr-2">Área do Cliente</Button>
        <Button onClick={() => router.push('/staff-login')}>Área do Funcionário →</Button>
      </div>
    </nav>
  )
}