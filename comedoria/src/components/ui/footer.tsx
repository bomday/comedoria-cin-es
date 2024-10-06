import Image from 'next/image'
import { Instagram, Facebook, Linkedin } from 'lucide-react'
import { WhiteLogo } from '@/app/assets/index'

export default function Footer (){
    return (
        <footer className="bg-wine h-[4.5rem] text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-start">
                            <Image
                                src={WhiteLogo}
                                alt={"Logo"}
                                className="w-36 h-auto ml-12"
                            />
                        </div>
                    </div>
                    <div className="text-[#FFFFFF] text-sm mb-4 md:mb-0">
                        © 2024 Comedoria. All rights reserved.
                    </div>
                    <div className="flex flex-col md:flex-row items-start mr-12">
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