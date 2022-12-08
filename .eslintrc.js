// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'prettier'],

  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    // 'prettier/prettier': ['error', {
    //     printWidth: 300,
    //     indentation: 4,
    //     vueIndentScriptAndStyle:true,
    //     "indentation-level":2
    // }, {}],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //与prettier插件有冲突
    'array-bracket-spacing': ['error', 'never', { objectsInArrays: false }],
    'object-curly-spacing': ['error', 'always'],
    'vue/multi-word-component-names': 'off', //多字组件名称
    'vue/order-in-components': [
      // Vue组件排序  Vue.js风格指南(https://cn.vuejs.org/v2/style-guide/)
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'fetch',
          'asyncData',
          'data',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    // Vue属性排序
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: true //字母顺序
      }
    ]
  },

  globals: {
    process: true,
    require: true,
    __dirname: true,
    module: true,
    location: true,
    window: true,
    global: true,
    exports: true,
    jest: true,
    beforeAll: true,
    afterAll: true,
    document: true
  }
}
