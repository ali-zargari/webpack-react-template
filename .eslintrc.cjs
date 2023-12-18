module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "windows"],
		"react/react-in-jsx-scope": "off",
		quotes: ["error", "double"],
		semi: ["error", "always"],
	},
	settings: {
		react: {
			version: "18.2.0", // change the version number to your specific version
		},
	},
};
