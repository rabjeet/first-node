const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const UserConroller = require('../controller/user.controller')
users.use(cors())
process.env.SECRET_KEY = 'secret'

users.post('/register', UserConroller.registeruser)
users.post('/login', UserConroller.userLogin)
module.exports = users