import Image from 'next/image'
import { Instagram, Facebook, Linkedin } from 'lucide-react'
import logozinhoImageWhite from '../../app/assets/images/logo_icon_branco.png';

export default function Footer() {
    return (
        <footer className="bg-[#8B1A1A] text-white py-6 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-start">
                            <Image
                            src={logozinhoImageWhite}
                            alt="Comedoria Logo"
                            width={37.5}
                            height={10}
                            />
                            <div className="text-[#FFFFFF] text-2xl font-bold ml-4">Comedoria</div>
                        </div>
                    </div>
                    <div className="text-[#FFFFFF] text-sm mb-4 md:mb-0">
                    © 2023 Altos Ltd. All rights reserved.
                    </div>
                    <div className="flex flex-col md:flex-row items-start">
                        <div className="flex items-center space-x-4 text-[#FFFFFF] mb-2 md:mb-0 md:mr-4">
                            <a href="#" className="text-white hover:text-gray-300 text-sm mr-2">Terms & Conditions</a>
                            <a href="#" className="text-white hover:text-gray-300 text-sm">Privacy Policy</a>
                        </div>
                    <div className="text-[#FFFFFF] flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-300">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}