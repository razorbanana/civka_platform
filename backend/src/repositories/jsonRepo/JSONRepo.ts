import {promises as fs} from "fs"
import Ratings from "../../models/entities/Ratings.ts"
import Player from "../../models/entities/Player.ts"
import Game from "../../models/entities/Game.ts"
import type RepoInterface from "../RepoInterface.ts"
import type { PlayerDTO } from "../../models/dto/PlayerDTO.ts"
import type { GameDTO } from "../../models/dto/GameDTO.ts"
import type { RatingsDTO } from "../../models/dto/RatingsDTO.ts"

export default class JSONStorage implements RepoInterface{

    private ratingsPath = "src/data/ratings.json"
    private playersPath = "src/data/players.json"
    private gamesPath = "src/data/games.json"

    constructor(){
    }

    async getRatings(){
        const content: string = await fs.readFile(this.ratingsPath, "utf-8")
        const data: RatingsDTO = JSON.parse(content)
        const result = new Ratings(data.ratings)
        return result
    }

    async getPlayers(){
        const content: string = await fs.readFile(this.playersPath, "utf-8")
        const data: PlayerDTO[] = JSON.parse(content)
        const players = data.map(item => new Player(item.name))
        return players
    }

    async getGames(){
        const content: string = await fs.readFile(this.gamesPath, "utf-8")
        const data: GameDTO[] = JSON.parse(content)
        const result = data.map(item => new Game(item.id, item.result))
        return result
    }

    async addPlayer(player: Player){
        const players: Player[] = await this.getPlayers()
        players.push(player)
        await fs.writeFile(this.playersPath, JSON.stringify(players, null, 2))
    }

    async addGame(game: Game){
        const content: string = await fs.readFile(this.gamesPath, "utf-8")
        const games: Game[] = JSON.parse(content)
        games.push(game)
        await fs.writeFile(this.gamesPath, JSON.stringify(games, null, 2))
    }

    async rewriteRatings(ratings: Ratings){
        const content = JSON.stringify(ratings, null, 2)
        await fs.writeFile(this.ratingsPath, content)
    }


}