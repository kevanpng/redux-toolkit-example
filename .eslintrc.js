module.exports = {
    env: {
        node: true,
        browser: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    globals: {},
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "import", "react-hooks"],
    ignorePatterns: ["node_modules/"],
    rules: {
        "indent": ["warn", 4]
    },
    settings: {
        react: {
            version: "latest", // "detect" automatically picks the version you have installed.
        },
    },
};