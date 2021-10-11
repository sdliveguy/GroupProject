const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()


//static files or try app.use(express.static(__dirname + '/public'))
app.use(express.static('public'))

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')
app.set("views", './views')

const port = process.env.PORT || 3000;


//webpage routes

//app.get('/', (req, res) => res.render('index'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/adrian', (req, res) => {
  res.sendFile(__dirname + '/views/adrian-webpage.html')
})

app.get('/steve', (req, res) => {
  res.sendFile(__dirname + '/views/steve-webpage.html')
})

app.get('/diya', (req, res) => {
  res.sendFile(__dirname + '/views/diya-webpage.html')
})

app.get('/paula', (req, res) => {
  res.sendFile(__dirname + '/views/paula-webpage.html')
})

app.get('/mariela', (req, res) => {
  res.sendFile(__dirname + '/views/mariela-webpage.html')
})

/* naming the webpage directly
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
})
*/

// custom 404 page
app.use((req, res) => {
    res.status(404)
    res.render('404')
  })

//where the websever is being hosted 
app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))

