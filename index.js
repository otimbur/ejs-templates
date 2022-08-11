const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) =>{ 
  let title = 'Our Home Page'
  let heading = 'My Website '
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
})
app.get('/about', (req, res) =>{ 
  let title = 'Our About Page'
  let heading = 'My Website '
  res.render('pages/about',{
    'title':title,
    'heading':heading
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
