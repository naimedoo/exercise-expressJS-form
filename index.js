const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const port = 3003;


app.engine('handlebars',engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.listen(port, (req,res)=> {
    console.log('app is listening on port :', 3003)
})

app.get('/',(req,res)=>{
    res.render('form', {
  
  })
})

app.post('/form',(req,res)=> {
    console.log(req.body)
    res.redirect('/')
    
})