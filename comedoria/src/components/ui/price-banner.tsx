import Image from 'next/image'
import BannerImage from '../../app/assets/images/price-banner-image.svg'

export default function PriceBanner() {
  
    return (
      <div className="relative h-[10rem]">
        <Image
          src={BannerImage}
          alt="Salgados promocionais"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="flex items-center absolute m-auto inset-0 bg-black bg-opacity-30">
          <h2 className="advent-pro-700 text-darkgreen text-lg-smtitle font-bold text-left pl-16">
            Qualquer salgado por R$ 4,00!
          </h2>
        </div>
      </div>
    )
  }