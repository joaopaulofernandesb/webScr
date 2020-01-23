const rp = require('request-promise')
const cheerio = require('cheerio')

const options = {
    uri: 'http://portal.esocial.gov.br/agenda/agenda-1',
    transform: function (body) {
      return cheerio.load(body)
    }
  }


  rp(options)
.then(($) => {
  $('.tileItem visualIEFloatFix tile-link').each((i, item) => {
    console.log($(item).find('.tileHeadline').text())
  })
})
.catch((err) => {
  console.log(err);
})