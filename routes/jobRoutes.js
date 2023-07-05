const express = require('express');
const { jobController } = require('../controllers/jobController');

const jobRoutes = express.Router();


jobRoutes.post('/', jobController.add)
jobRoutes.get('/', jobController.getAll)
jobRoutes.delete('/:id', jobController.delete)
jobRoutes.get('/:id', jobController.getJobsByLocationId)



module.exports = {
    jobRoutes
}
