module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    // ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ],
  comments: false
}
