module.exports = {
    env: {
        node: true,
        browser: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
    globals: {},
    parser: "@typescript-eslint/parser",

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "import", "react-hooks", "@typescript-eslint"],
    ignorePatterns: ["node_modules/"],
    rules: {
        indent: ["warn", 4],
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",

    },
    settings: {
        react: {
            version: "latest", // "detect" automatically picks the version you have installed.
        },
    },
};