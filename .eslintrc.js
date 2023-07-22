module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:vue/vue3-essential',
    '.eslintrc-auto-import.json'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  globals: {
    definePageConfig: 'readonly',
    defineAppConfig: 'readonly',
    defineProps: 'readonly',
    defineEmits: 'readonly'
  },
  rules: {
    //   'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //   'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    // 'max-len': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'vue/multi-word-component-names': 'off'
  }
}
