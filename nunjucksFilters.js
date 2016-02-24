function extractWords(str, i) {
  var words = str.split(' ').filter(function(word) { return word.length > 0 })

  return i || i === 0 ? words[i] : words
}

function skillRange(str) {
  return str.indexOf('/') >= 0 ? parseInt(str.substring(str.indexOf('/') + 1)) : null
}

function skillLevel(str) {
  return str.indexOf('/') >= 0 ? parseInt(str) : null
}

function humanizeDateMonth(str, noMonth) {

  if(!str) return undefined

  var monthsMap = ['',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  var year = parseInt(str)
  if(noMonth) return year

  var month = monthsMap[parseInt(str.substr(5, 2))]
  return month + ' ' + year
}

module.exports = {
  extractWords: extractWords,
  skillRange: skillRange,
  skillLevel: skillLevel,
  humanizeDateMonth: humanizeDateMonth
}