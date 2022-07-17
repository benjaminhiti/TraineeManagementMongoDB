const express = require('express')
const app = express()
const router = express.Router()

const  staff = require('../controllers/staff')

//  routes.route('/:id')
//     .get(staffs.getOneStaff)

router.route('/')
    .get(staff.findStaff)
    .post(staff.createStaff)
    .put(staff.updateStaff)
    .delete(staff.deleteStaff)

module.exports = router