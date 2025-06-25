/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'en-US', 'ne', 'hi-IN'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.disquscdn.com', // ✅ Disqus images
      },
      {
        protocol: 'https',
        hostname: 'disqus.com', // ✅ Disqus avatars
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // ✅ Google profile photos
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com', // ✅ Gravatar avatars
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net', // ✅ Contentful images
      },
    ],
  },
};

export default nextConfig;
