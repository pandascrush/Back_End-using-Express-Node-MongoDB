const express = require('express')
const router = express.Router()
const {getEmployee,postEmployee, getSingle, updateEmployee, deleteEmployee}  = require('../controller/empcontroller')
 
router.route('/emp').get(getEmployee)
router.route('/emp/post').post(postEmployee)  // localhost:8000/api/view/emp/post
router.route('/emp/:eid').get(getSingle)
router.route('/emp/:eid').patch(updateEmployee)
router.route('/emp/:eid').delete(deleteEmployee)

module.exports = {router}
