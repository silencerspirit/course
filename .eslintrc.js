module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  "rules": {
    "no-console": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "no-shadow": [2, { allow: ['state'] }],
    "no-param-reassign": 0,
    "consistent-return": 0,
    "no-plusplus": 0,
    "vue/no-v-html": 0,
    "vue/require-default-prop": 0,
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
}
