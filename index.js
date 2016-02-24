var fs = require('fs')
var nunjucks = require('nunjucks')
var env = nunjucks.configure()
var filters = require('./nunjucksFilters.js')
var resumeLimits = require('./resumeLimits.js')
var legalNote = require('./legalNote.js')

env.addFilter('extractWords', filters.extractWords)
env.addFilter('skillRange', filters.skillRange)
env.addFilter('skillLevel', filters.skillLevel)
env.addFilter('humanizeDateMonth', filters.humanizeDateMonth)

function render(resume) {

  var css = fs.readFileSync(__dirname + '/css/css.css', 'utf-8')
  var cssPrint = fs.readFileSync(__dirname + '/css/print.css', 'utf-8')

  return env.render('./index.nunjucks', {
    css: css,
    cssPrint: cssPrint,
    resume: resume,
    limits: resumeLimits,
    legalNote: legalNote
  });

}

module.exports = {
  render: render
}