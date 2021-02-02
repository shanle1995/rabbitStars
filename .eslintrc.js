// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // js语句结尾禁止使用分号
    'semi': ['error', 'never'],
    // 三等号
    'eqeqeq': 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': 0,
    // 关键字后面使用一致的空格
    'keyword-spacing': 0,
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': 0,
    // 引号类型
    "quotes": [2, "single"],
    // 禁止出现未使用过的变量
    'no-unused-vars': 2,
    // 要求或禁止末尾逗号
    'comma-dangle': 0,
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    // 禁止修改const声明的变量
    'no-const-assign': 2,
    // 函数参数不能重复
    'no-dupe-args': 2,
    // 强制使用驼峰命名法
    'camelcase': 2,
    //禁止省略浮点数的0
    'no-floating-decimal': 2
  }
}
