const { src, dest, watch } = require('gulp')
const sassFactory = require('gulp-sass')
const sassCompiler = require('sass')
const sass = sassFactory(sassCompiler)

exports.default = async function () {
  console.log('hello')
}

exports.copy = async function () {
  return src('src/*scss').pipe(dest('output'))
}

exports.style = async function () {
  return src('src/*scss').pipe(sass()).pipe(dest('output'))
}

exports['style:watch'] = async function () {
  return watch('src/*scss', exports.style)
}
