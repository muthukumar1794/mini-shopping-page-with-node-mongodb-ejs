const express = require('express')
const userRouter = express.Router()
const userControllers = require('../../controllers/user')

userRouter.get('/admin/get-user',userControllers.addUser)
userRouter.get('/admin/get-user-list',userControllers.getUser)
userRouter.post('/admin/add-user',userControllers.addUserData)

module.exports = userRouter