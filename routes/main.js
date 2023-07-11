const {Router} = require("express")
const path = require('path')
const router = Router()

router.get('/', (req, res)=>{
    const { users } = require('./users')
  
    res.render('main' , {
        title: 'User list',
        users
    })
})
module.exports = router