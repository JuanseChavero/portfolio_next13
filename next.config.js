/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  modularizeImports: {
    '@heroicons/react': {
      transform: '@heroicons/react/20/solid/{{member}}',
    },
    'react-icons': {
      transform: 'react-icons/fa/{{member}}',
      transform: 'react-icons/si/{{member}}',
    },
  },
};

module.exports = nextConfig;
