const express = require('express')
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen('/tmp/nginx.socket', () => {
    fs.writeFileSync('/tmp/app-initialized')
    console.log(`Listening on ${ PORT }`)
  })
