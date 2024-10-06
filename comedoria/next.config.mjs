/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
          pathname: '/account123/**',
        },
        {
          protocol: 'https',
          hostname: 'img.freepik.com', // Adicione esta linha
          port: '',
          pathname: '/**', // Permitir todas as imagens desse domínio
        },
      ],
    },
};
  
export default nextConfig;  