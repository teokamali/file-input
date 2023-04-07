/** @type {import('next').NextConfig} */
const { join } = require("path");
const { ProvidePlugin } = require("webpack");

const nextConfig = {
	experimental: {
		appDir: true,
	},
	webpack: (config) => {
		config.plugins.push(
			new ProvidePlugin({
				React: "react",
			})
		);

		config.resolve.alias = {
			...config.resolve.alias,
			"@core": join(__dirname, "./src/core"),
			"@type": join(__dirname, "./src/core/types.ts"),
			"@icon": join(__dirname, "./src/utils"),
		};

		return config;
	},
};

module.exports = nextConfig;
