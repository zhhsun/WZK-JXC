'use strict';

const express = require('express');
const router = express.Router();

const classroomController = require('../controllers').classroom;
const { purchaseOrder } = require('../controllers')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Classroom Router */
router.get('/api/classroom', classroomController.list);
router.get('/api/classroom/:id', classroomController.getById);
router.post('/api/classroom', classroomController.add);
router.put('/api/classroom/:id', classroomController.update);
router.delete('/api/classroom/:id', classroomController.delete);

router.post('/api/v1/companies/:company-id/purchase-orders', purchaseOrder.prototype.create);

module.exports = router;
