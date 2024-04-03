const express = require('express')
const { userRegister, loginUser } = require('../controller/usercontroller')
const userRouter = express.Router()

userRouter.route('/reg').post(userRegister)
userRouter.route('/login').post(loginUser)

module.exports = {userRouter}