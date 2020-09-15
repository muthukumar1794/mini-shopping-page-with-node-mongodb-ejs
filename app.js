const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const ejs = require('ejs')

const allRoutes = require('./routes/route-container')
const mongoConnect = require('./config/db_config').mongoConnect
const User = require('./models/adminModels/user')

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.engine('ejs', require('ejs').__express);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use((req,res,next)=>{
User.findById('5f5f661432dbfd31532b8856')
.then(user=>{
    console.log("got user app.js",user)

    req.user = user

    next()
  

}).catch(error=>{console.log("error",error)})
})

allRoutes.map(Routes=>{app.use(Routes)})

mongoConnect(()=>{
    app.listen(3001,()=>{
    console.log("working")
    })
})