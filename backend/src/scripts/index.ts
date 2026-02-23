import playersController from "../controllers/playersController.ts"
import ratingController from "../controllers/ratingController.ts"
import Ratings from "../models/entities/Ratings.ts"


//this script is for testing functionality. it will rewrite existing ratings
console.log("lets check ratings")

const obj = {
    Elzaor: 1000,
    Sanya: 1100
}

const ratings1 = new Ratings(obj)

ratingController.rewriteRatings(ratings1)

ratingController.getRatings().then(response => {
    console.log(response.getRatings())
})

playersController.getPlayers().then(response => console.log(response))