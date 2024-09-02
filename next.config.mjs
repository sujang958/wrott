/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [{ source: "/@me", destination: "/me" }],
}
export default nextConfig
