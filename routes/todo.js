const express = require('express');
const router = express.Router();
const usercontrol = require('../controls/co')
const getTodo = require('../controls/gettodo')
const updataTodo = require('../controls/updateTodo')
const deletetodo = require('../controls/deletetodo')

//define API router
router.post('/createTodo', usercontrol.createTodo);
router.get('/getTodos', getTodo.getTodo);
router.get('/getTodos/:id', getTodo.getTOdoByID);
router.put('/updatetodo/:id', updataTodo);
router.delete('/deletetodo/:id', deletetodo)

module.exports = router; 