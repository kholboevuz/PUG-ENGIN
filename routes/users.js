const {Router} = require("express")
const path = require('path')
const router = Router()

const users = []

router.get('/add-users' , (req, res)=>{
    res.render('add-users', {
        title: "Add Users"
    }) 
})

router.post('/users', (req, res)=>{
    users.push({username: req.body.username , userage: req.body.userage})
    res.redirect('/')
})

exports.router = router

exports.users = users