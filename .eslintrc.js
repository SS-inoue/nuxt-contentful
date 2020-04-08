module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'semi': [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    "comma-dangle": ["error", "always-multiline"],
    'no-trailing-spaces': ["error", { "skipBlankLines": true }],
    "space-before-function-paren": ["error", , {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "always"
    }],
    'no-irregular-whitespace': ["error", {"skipTemplates": true}],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "always",
        "component": "always"
      },
      "svg": "any",
      "math": "always"
    }],
    'prettier/prettier': [
      'error',
      {
        'semi': false,
        "singleQuote": true,
        'trailingComma': 'all',
      }
    ],
  }
}
