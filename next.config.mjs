/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
          },
          {
            protocol: 'https',
            hostname: 'media.istockphoto.com',
          },
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
          },
          {
            protocol: 'https',
            hostname: 'source.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'media.graphassets.com',
          },
          {
            protocol: 'https',
            hostname: 'static-00.iconduck.com',
          },
          {
            protocol: 'https',
            hostname: 'repository-images.githubusercontent.com',
          },
        ],
      },
};

export default nextConfig;
