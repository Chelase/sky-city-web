/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产模式禁止使用console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产模式禁止使用debugger
    'vue/multi-word-component-names': "off" // 关闭vue组件名称校验
  }
}
