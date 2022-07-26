module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended', // vue3解析 https://eslint.vuejs.org/
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, //使用单引号
        semi: false, // 使用分号
        trailingComma: 'none', // 末尾逗号
        arrowParens: 'avoid', //  箭头函数括号
        endOfLine: 'auto', // 结尾换行自动
        printWidth: 80, //一行的字符数，如果超过会进行换行，默认为80
        bracketSpacing: true, // 对象大括号直接是否有空格，默认为 true，效果：{ a: 1 }
        tabWidth: 2, // 一个 tab 代表几个空格数，默认为 2 个
        useTabs: false //是否使用 tab 进行缩进，默认为false，表示用空格进行缩减
      }
    ],
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/prefer-import-from-vue': 'off'
  },
  globals: {
    defineOptions: 'readonly',
    defineProps: 'readonly',
    defineEmits: 'readonly'
  }
}
