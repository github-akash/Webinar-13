const express = require('express')
const app = express()
const db = require('./db')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","hbs")

app.get('/',(req, res) => {
  db.getALLPersons()
  .then((persons) => {
      res.render('persons',{persons}) 
    })
  .catch((err) => {
      res.send(err)
   })
})


app.get('/add',(req,res) => {
    res.render('persons_add')
})

app.post('/add',(req,res) => {
  db.AddPersons(req.body.name, req.body.age, req.body.city)
    .then(() =>{
    res.redirect('/add')
    })  
    .catch((err) => {
     res.send(err)
  })
})

app.listen(2345, () => { 
    console.log("server started at http://localhost/:2345")
})