/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "media.themoviedb.org" }],
  },
};

export default nextConfig;
