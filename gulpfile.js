var fs = require('fs')
var path = require('path')
var browserSync = require('browser-sync').create()
//var nunjucks = require('nunjucks')
var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
//var nunjucksGulp = require('gulp-nunjucks')
var resumeSchema = require('resume-schema')
//var filters = require('./nunjucksFilters.js')
//var resumeLimits = require('./resumeLimits.js')
//var legalNote = require('./legalNote.js')

var mainFolder = '.'
var scssFolder = mainFolder + '/scss'
var cssFolder = mainFolder + '/css'
var paths = {
  mainFolder: mainFolder,
  scssFolder: scssFolder,
  cssFolder: cssFolder,
  cssSources: scssFolder + '/**/*.*',
  mainScss: scssFolder + '/css.scss',
  mainCss: cssFolder + '/css.css',
  printScss: scssFolder + '/print.scss',
  printCss: cssFolder + '/print.css',
  template: mainFolder + '/index.nunjucks',
  output: mainFolder + '/index.html',
  resume: mainFolder + '/resume.json'
}

//var env = new nunjucks.Environment()
//env.addFilter('extractWords', filters.extractWords)
//env.addFilter('skillRange', filters.skillRange)
//env.addFilter('skillLevel', filters.skillLevel)
//env.addFilter('humanizeDateMonth', filters.humanizeDateMonth)

gulp.task('serve', ['sass', 'resume'], function() {

  browserSync.init({
    server: { baseDir: paths.mainFolder }
  })

  gulp.watch(paths.cssSources, ['sass', 'resume']).on('change', function(){ setTimeout(function() { browserSync.reload() }, 500) } )
  gulp.watch(paths.template, ['resume']).on('change', function(){ setTimeout(function() { browserSync.reload() }, 500) } )
  gulp.watch(paths.resume, ['resume']).on('change', function(){ setTimeout(function() { browserSync.reload() }, 500) } )

})

gulp.task('sass', function() {
  return gulp.src([paths.mainScss, paths.printScss])
    .pipe(sass())
    .pipe(rename({
      extname: '.css',
      dirname: paths.cssFolder
    }))
    .pipe(gulp.dest(paths.mainFolder))
    .pipe(browserSync.stream())
})

gulp.task('resume', ['sass'], function() {

  var resume = JSON.parse(fs.readFileSync(path.join(__dirname, paths.resume), 'utf-8'))
  var html = require('./index.js').render(resume)
  fs.writeFileSync(paths.output, html)

})

gulp.task('validate', function(cb) {

  var resume = JSON.parse(fs.readFileSync(path.join(__dirname, paths.resume), 'utf-8'))

  resumeSchema.validate(resume, function(err, report) {

    if(err) {
      console.error('The resume object is invalid: ', err)
      cb(err)
      return
    }

    console.log('Resume validation succesfull: ', report)
    cb()

  })

})

gulp.task('default', ['serve'])