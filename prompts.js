module.exports = [
  {
    name: 'cssPreprocessor',
    type: 'list',
    message: 'Select the css pre-processor for your project',
    choices: [
      {
        name: 'Less',
        value: 'less'
      },
      {
        name: 'Sass/SCSS',
        value: 'scss'
      }
    ],
    default: 'scss'
  }
]