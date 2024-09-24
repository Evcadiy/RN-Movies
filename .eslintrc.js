// https://docs.expo.dev/guides/using-eslint/
// eslint config
module.exports = {
	extends: [
		"expo",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended"
	],
	plugins: ["@typescript-eslint", "react", "react-hooks"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		},
		project: "./tsconfig.json"
	},
	env: {
		browser: true,
		es6: true,
		node: true
	},
	settings: {
		react: {
			version: "detect"
		}
	},
	rules: {
		"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
		"@typescript-eslint/no-explicit-any": "warn",
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off"
	},
	ignorePatterns: ["node_modules/", "dist/", ".expo/", "babel.config.js"],
	overrides: [
		{
			files: ["metro.config.js"],
			rules: {
				"@typescript-eslint/no-var-requires": "off"
			}
		}
	]
}
