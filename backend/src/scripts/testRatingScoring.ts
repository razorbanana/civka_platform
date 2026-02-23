import { randomInt } from "crypto"
import ratingController from "../controllers/ratingController.ts"
import Game from "../models/entities/Game.ts"
import Ratings from "../models/entities/Ratings.ts"

//this script is for testing functionality. it will rewrite existing ratings

const result1 = {
    Elzaor: 1,
    Sanya: 2
}

const result2 = {
    player1: 2,
    Elzaor: 3,
    Sanya: 1
}

const f1 = () => randomInt(10000).toString()

const game1: Game = new Game(f1(), result1)
const game2: Game = new Game(f1(), result2)

ratingController.rewriteRatings(new Ratings({}))
.then(response => {
    return ratingController.updateRatings(game1)
})
.then(() => ratingController.getRatings())
.then(response => {
    console.log(response.getRatings())
    return ratingController.updateRatings(game2)
})
.then(() => ratingController.getRatings())
.then(response => {
    console.log(response.getRatings())
})
.catch(err => {console.log(err)})


/*
*/

