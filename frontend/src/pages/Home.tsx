import { useEffect, useState } from 'react'
import WorkOutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'


interface Workout {
  _id: number,
title: string,
load: number, 
reps: number
}
const Home = () => {
  const [workouts, setWorkouts] = useState([])

  const fetchWorkouts = async () => {
    const response = await fetch('http://localhost:4000/api/workouts/')
    const json = await response.json()

    if (response.ok) {
      setWorkouts(json)
    }
  }
console.log(workouts)
  useEffect(() => {
    fetchWorkouts()
  }, [])
  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((workout : Workout) => (
            <WorkOutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
