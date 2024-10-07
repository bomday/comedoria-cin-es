import Image from 'next/image';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { WhiteLogo } from '@/app/assets/index';
import "@/app/globals.css";

export default function Footer() {
  return (
    <footer className="bg-wine text-white py-6 mt-auto md:py-4 md:h-[4.5rem]"> {/* Reduzir padding */}
      <div className="container mx-auto px-16">
        <div className="flex flex-col md:flex-row justify-between items-center sm:space-y-2 md:space-y-0 lg:space-y-4"> {/* Ajustar alinhamento e espaçamento */}
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
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0"> {/* Espaçamento ajustado */}
            <div className="flex items-center space-x-4 text-sm">
              <a href="https://github.com/bomday/comedoria-cin-es/blob/main/comedoria/public/docs/business/terms_and_conditions.md" className="text-[#FFFFFF] hover:text-gray-300">Terms & Conditions</a>
              <a href="https://github.com/bomday/comedoria-cin-es/blob/main/comedoria/public/docs/business/privacy_policy.md" className="text-[#FFFFFF] hover:text-gray-300">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
