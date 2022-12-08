module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3.24.1',
        targets: {
          chrome: '58',
          ie: '11'
        }
      }
    ]
  ]
}
