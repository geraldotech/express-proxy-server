const app = require('express')()
const fs = require('fs')
var proxy = require('express-http-proxy')
const http = require('http')

// https://www.npmjs.com/package/express-http-proxy

// all trafic is redirect to this host
/* app.use(
  '/',
  proxy('www.google.com', {
    https: true,
  })
) */

app.use(
  '/',
  proxy('www.geraldox.com', {
    proxyReqBodyDecorator: function (proxyReq, srcReq) {
      return new Promise(function (resolve, reject) {
        http.get('http://geraldox.com', function (err, res) {
          if (err) {
            reject(err)
          }
          resolve(res)
        })
      })
    },
  })
)

app.listen(8080, () => {
  console.log(`port 8080 running`)
})
