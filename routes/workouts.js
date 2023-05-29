const express = require('express')
const { createWorkout, getWorkouts, getWorkout } = require('../controllers/workoutController')


const router = express.Router()

// GET All workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)


// POST a new workout
router.post('/', createWorkout)

// Delete a new workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete a new workout'})
})

// Update a new workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'Update a new workout'})
})

module.exports = router