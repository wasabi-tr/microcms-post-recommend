/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.microcms-assets.io',
			},
		],
	},
}

module.exports = nextConfig
