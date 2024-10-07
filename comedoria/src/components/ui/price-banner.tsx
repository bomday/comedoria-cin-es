import Image from 'next/image'
import BannerImage from '../../app/assets/images/price-banner-image.svg'

export default function PriceBanner() {
  return (
    <div className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
      <Image
        src={BannerImage}
        alt="Salgados promocionais"
        fill
        style={{ objectFit: 'cover' }}
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center">
        <h2 className="advent-pro-700 text-darkgreen font-bold text-left pl-4 sm:pl-8 md:pl-12 lg:pl-16 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Qualquer salgado<br className="sm:hidden" /> por R$ 4,00!
        </h2>
      </div>
    </div>
  )
}