const express = require('express');

const router = express.Router();

const ToDoListRoutes = require('./ToDoListRoutes.js');

router.use(ToDoListRoutes.initializeData);
router.get('/', ToDoListRoutes.getListRedirect);
router.get('/list', ToDoListRoutes.getList);
router.get('/styles.css', ToDoListRoutes.getStyles);

router.post('/add', ToDoListRoutes.postAdd);
router.post('/save', ToDoListRoutes.postSave);
router.post('/remove', ToDoListRoutes.postRemove);

module.exports = { router };