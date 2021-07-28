module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: 1,
	},
	extends: ["airbnb-base"],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	rules: {
		quotes: [0],
		indent: [2, "tab"],
		"no-tabs": 0,
	},
};
