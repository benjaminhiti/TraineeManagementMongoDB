const express = require('express')
const app = express()
const router = express.Router()

const  trainees = require('../controllers/trainee')


router.route('/')
    .get(trainees.findTrainee)
    .post(trainees.createTrainee)
    .put(trainees.updateTrainee)
    .delete(trainees.deleteTrainee)

module.exports = router