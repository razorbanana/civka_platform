import ratingService from "../composition/ratingSingleton.ts"
import Ratings from "../models/entities/Ratings.ts"
import Game from "../models/entities/Game.ts"

class RatingController {
    async getRatings(){
        const data = await ratingService.getRatings()
        return data
    }

    async rewriteRatings(ratings: Ratings){
        await ratingService.rewriteRatings(ratings)
    }

    async updateRatings(game: Game){
        await ratingService.updateRatings(game)
    }
}

const ratingController = new RatingController()

export default ratingController