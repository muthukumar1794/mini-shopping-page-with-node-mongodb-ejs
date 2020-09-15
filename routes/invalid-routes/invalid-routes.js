const express = require('express')
const invalidRouter = express.Router()

// invalidRouter.use('/',(req,res,next)=>{
//     res.redirect('/admin/index')
// })
// invalidRouter.use((req,res,next)=>{
//     res.send('<h1>page not found</h1>')
// })


module.exports = invalidRouter
