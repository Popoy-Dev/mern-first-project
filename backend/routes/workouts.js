const express = require('express')
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController')


const router = express.Router()

// GET All workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)


// POST a new workout
router.post('/', createWorkout)

// Delete a new workout
router.delete('/:id', deleteWorkout)

// Update a new workout
router.patch('/:id', updateWorkout)

module.exports = router