import Image from 'next/image';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { WhiteLogo } from '@/app/assets/index';
import "@/app/globals.css";

export default function Footer() {
  return (
    <footer className="bg-[#8B1A1A] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <Image
              src={WhiteLogo}
              alt="Logo"
              className="w-24 h-auto md:w-36"
            />
          </div>

          {/* Text Section */}
          <div className="text-[#FFFFFF] text-center md:text-left text-sm">
            © 2024 Comedoria. All rights reserved.
          </div>

          {/* Links and Social Media */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm mr-2">
              <a href="#" className="text-[#FFFFFF] hover:text-gray-300">Terms & Conditions</a>
              <a href="#" className="text-[#FFFFFF] hover:text-gray-300">Privacy Policy</a>
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-gray-300">
                <Instagram className="text-[#FFFFFF] w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Facebook className="text-[#FFFFFF] w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin className="text-[#FFFFFF] w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
