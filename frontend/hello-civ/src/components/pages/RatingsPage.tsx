import { useState, useEffect } from "react"
import type { Ratings } from "../../model/types/Ratings"
import { getRatings } from "../../api/ratingsApi"


type RatingsPageProps = {
    toggleVisible: () => void
}

function RatingsPage ({toggleVisible}: RatingsPageProps){
    const [ratings, setRatings] = useState<Ratings>()

    useEffect(() => {
        getRatings()
        .then(response => setRatings(response))
        .catch(err => console.error(err))
    }, [])

    if (ratings){
        return(
          <>
            {Object.keys(ratings.ratings).map(key => {
              return (
                <div key={key}>
                  {key}'s rating is {ratings.ratings[key].toFixed(0)}
                </div>
              )
            })}
            <button onClick={toggleVisible}>Add Game</button>
          </>
        )
      }else{
        return (
          <>
            <p>Loading...</p>
          </>
        )
      }
}

export default RatingsPage