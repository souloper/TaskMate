/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['links.papareact.com','cloud.appwrite.io'],
        // remotePatterns: [
        //     {
        //       protocol: 'https',
        //       hostname: ['links.papareact.com','cloud.appwrite.io'],
        //       port: '',
        //       pathname: '/**',
        //     },
        //   ],
    },
};

module.exports = nextConfig
