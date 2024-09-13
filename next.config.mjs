/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [{ hostname: "media.themoviedb.org" }],
  },
};

export default nextConfig;
