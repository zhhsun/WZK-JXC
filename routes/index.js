'use strict';

const express = require('express');
const router = express.Router();

const classroomController = require('../controllers').classroom;
const { purchaseOrder } = require('../controllers');
const poController = new purchaseOrder();

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

router.post('/api/v1/companies/:company_id/purchase-orders', poController.create);
router.get('/api/v1/companies/:company_id/purchase-orders', () => {});
router.delete('/api/v1/companies/:company_id/purchase-orders/:order_id', () => {});
router.patch('/api/v1/companies/:company_id/purchase-orders/:order_id', () => {});
router.post('/api/v1/companies/:company_id/purchase-orders/:order_id/products', () => {});
router.get('/api/v1/companies/:company_id/purchase-orders/:order_id/products', () => {});
router.delete('/api/v1/companies/:company_id/purchase-orders/:order_id/products/:product_id', () => {});
router.patch('/api/v1/companies/:company_id/purchase-orders/:order_id/products/:product_id', () => {});

module.exports = router;
