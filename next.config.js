/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: 'cloudinary',
		path: '/',
	},
	trailingSlash: true,
};

module.exports = nextConfig;
