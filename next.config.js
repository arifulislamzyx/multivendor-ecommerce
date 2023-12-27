/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["assets.adidas.com", "images.pexels.com"],
  },

  env: {
    Stripe_PK_Key_For_Validation:
      "pk_test_51NsT1YLPZwWYMV1RrKWdFrO9tNMEdqojFKmeELW5xQkdHSHGfxHTzhImcylAsbsHOkQlOR2CnF2hw3dpNFmVRJbk00VUZTXep6",
  },
};

module.exports = nextConfig;

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
