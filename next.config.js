/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    '@heroicons/react': {
      transform: '@heroicons/react/20/solid/{{member}}',
    },
    'react-icons': {
      transform: 'react-icons/fa/{{member}}',
      transform: 'react-icons/si/{{member}}',
    },
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
};

module.exports = nextConfig;
