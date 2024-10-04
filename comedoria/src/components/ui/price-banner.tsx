import Image from 'next/image'
import BannerImage from '../../../public/assets/price-banner-image.svg'

export default function PriceBanner() {
  
    return (
      <div className="relative h-[176px]">
        <Image
          src={BannerImage}
          alt="Salgados promocionais"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute top-[49px] inset-0 bg-black bg-opacity-30">
          <h2 className="text-[#45480F] text-4xl font-bold text-left px-4 py-2 bg-green-800 bg-opacity-75 rounded">
            Qualquer salgado por R$ 4,00!
          </h2>
        </div>
      </div>
    )
  }