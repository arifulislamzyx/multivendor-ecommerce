/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["assets.adidas.com",]
    }
}

module.exports = nextConfig

// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'assets.adidas.',
//           port: '',
//           pathname: '/all-products/**',
//         },
//       ],
//     },
//   }