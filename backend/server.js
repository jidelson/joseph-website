const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + "/public")));

app.get('/api', (req, res) => {
    res.json({
        message: 'This is the api endpoint'
    })
  })

const PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
    console.log(`server started on port ${PORT} `)
  })
  