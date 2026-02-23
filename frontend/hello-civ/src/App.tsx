import { useEffect, useState } from 'react'
import './App.css'
import { getRatings } from './api/ratingsApi'
import type { Ratings } from './model/types/Ratings'

function App() {

  const [ratings, setRatings] = useState<Ratings>()
  useEffect(() => {
    getRatings()
    .then(response => setRatings(response))
    .catch(err => console.error(err))
  }, [])

  return (
    <div>
      {ratings? JSON.stringify(ratings) : "no ratings yet"}
    </div>
  )
}

export default App
