const express = require('express');

const path = require('path');

const app = express();

process.env.NODE_ENV = 'production';


if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
}

app.use(express.static(path.join(__dirname, '/public'), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.js')) {
        res.setHeader('Content-Type', 'text/javascript');
      }
    },
    // Set default MIME type for all .js files
    setHeader: (res, path) => {
      if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
      }
    }
  }));
  

app.get('/api', (req, res) => {
    res.json({
        message: 'This is the api endpoint'
    })
  })

const PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
    console.log(`server started on port ${PORT} `)
  })
  