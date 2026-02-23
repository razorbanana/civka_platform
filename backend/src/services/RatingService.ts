import type RepoInterface from "../repositories/RepoInterface.ts"
import type Ratings from "../models/entities/Ratings.ts"
import type Game from "../models/entities/Game.ts"
import validateGame from "../utils/validation/validateGame.ts"
import calculateRatings from "../utils/calculation/calculateMMR.ts"
import Player from "../models/entities/Player.ts"

class RatingService {

    private repo: RepoInterface

    constructor(repo: RepoInterface){
        this.repo = repo
    }

    async getRatings(){
        const data = await this.repo.getRatings()
        return data
    }

    async rewriteRatings(ratings: Ratings){
        this.repo.rewriteRatings(ratings)
    }

    async updateRatings(game: Game){
        const games = await this.repo.getGames()
        if (games.find(item => item.getId() === game.getId())) throw new Error("The game with this id has been added already")
        if (!validateGame(game)) throw new Error("The game is not valid")
        const ratings = await this.repo.getRatings()
        const players = await this.repo.getPlayers()
        for (const name of Object.keys(game.getResult())){
            if (!players.find(player => player.getName() === name)){
                await this.repo.addPlayer(new Player(name))
            }
        }
        //await this.repo.addGame(game)
        const newRatings = calculateRatings(ratings, game)
        await this.repo.rewriteRatings(newRatings)
    }
}

export default RatingService