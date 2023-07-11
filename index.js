const express = require('express')
const path = require('path')


const app = express()

app.set('view engine'  , 'pug')
app.set("views" , 'views')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname , "public")))

const userRouter = require('./routes/users')
const mainRouter = require('./routes/main')

app.use("/users",userRouter.router)
app.use(mainRouter)
app.use((req, res)=>{
    res.status(404).render('404' , {
        title: "404 Nod found"
    })
})



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('Server running on port:' + PORT);
})