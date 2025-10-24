const express = require('express');
const router = express.Router();
const { getAllCuentas, getById, getByQuery, getByBalance } = require('../Controller/Cuenta_Controller');

router.get('/cuentas', getAllCuentas);
router.get('/cuenta/:id',getById);
router.get('/query',getByQuery);
router.get('/cuentasBalance', getByBalance);

module.exports = router;