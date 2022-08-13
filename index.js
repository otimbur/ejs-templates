const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));
app.use("/images", express.static(__dirname));


app.get('/', (req, res) =>{ 
  let title = 'Our Home Page'
  let heading = 'Moldova'
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
})
app.get('/about', (req, res) =>{ 
  let title = 'What was used'
  let heading = 'Node.js & express'
  res.render('pages/about',{
    'title':title,
    'heading':heading
  })
})
app.get('/gallery', (req, res) =>{ 
  let title = 'Our Gallery Page'
  let heading = 'Enjoy '
  res.render('pages/gallery',{
    'title':title,
    'heading':heading
  })
})

app.get('/history', (req, res) =>{ 
  let title = "Moldova's History"
  let heading = 'A little about Moldova '
  res.render('pages/history',{
    'title':title,
    'heading':heading
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


