/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	reactStrictMode: true,
	images: {
		loader: 'cloudinary',
		path: '/',
	},
	trailingSlash: true,
};

module.exports = nextConfig;
