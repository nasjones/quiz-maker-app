require("dotenv").config();
module.exports = {
	ENDPOINT: process.env.API_URL,
	REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
	webpack: (config, { isServer }) => {
		// Fixes npm packages that depend on `fs` module
		if (!isServer) {
			config.node = {
				fs: "empty",
			};
		}
		return config;
	},
};
