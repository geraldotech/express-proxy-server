const app = require('express')()
const fs = require('fs')

app.get('/', (req, res) => {
  console.log(req)
  //console.log(req.hostname)
  //res.send('res')

  // if condition
  if (req.hostname.includes('claro')) {
    //res.send('site da claro')
    res.status(301).redirect('http://www.claro.com.br')
  }

  if (req.hostname.includes('twitter')) {
    res.send('<h1>show my ipaddress')
  }

  //check file exists using fs
  const checkFile = `${__dirname}/${req.hostname}.html`

  if (fs.existsSync(checkFile)) {
    //console.log(`Existe o ${checkFile}`)
    // set static htmlfiles

    // browser call: http://servicea
    res.sendFile(`${__dirname}/${req.hostname}.html`)
  } else {
    //console.log(`nao existe ${checkFile}`)
    //redirect to own url with HTTPS
    res.status(301).redirect(`https://${req.hostname}`)
    //redirect to 404 file ?
    //res.sendFile(`${__dirname}/404.html`)
  }
  console.warn(`http://${req.hostname}`)
})

app.listen(8080, () => {
  console.log(`port 8080 running`)
})
