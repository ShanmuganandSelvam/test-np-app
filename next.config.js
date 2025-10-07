/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',

  // Skip ESLint issues during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Skip TypeScript issues during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable Next.js image optimization
  images: { 
    unoptimized: true,
  },
  
  // Custom base path for deployment
  basePath: '/9330d75d-094e-47ca-9be6-da08534c87e6/xvi5w9o9/qltm1f7g/preview',
  assetPrefix: '/9330d75d-094e-47ca-9be6-da08534c87e6/xvi5w9o9/qltm1f7g/preview',
};

module.exports = nextConfig;
