const app = require('express')()
//var proxy = require('express-http-proxy')

app.get('/', (req, res) => {
  //console.log(req)
  //console.log(req.hostname)
  //res.send('res')

  // if condition
  if (req.hostname.includes('claro')) {
    //res.send('site da claro')
    res.status(301).redirect('https://www.claro.com.br')
  }

  // set static htmlfiles
  res.sendFile(`${__dirname}/${req.hostname}.html`)
  //console.log(req.hostname)
})

app.listen(8080, () => {
  console.log(`port 8080 running`)
})
