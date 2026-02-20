import {promises as fs} from "fs"
import type Rankings from "../../models/entities/Rankings.ts"
import type Player from "../../models/entities/Player.ts"
import type Game from "../../models/entities/Game.ts"
import type RepoInterface from "../RepoInterface.ts"

export default class JSONStorage implements RepoInterface{

    private rankingsPath = "src/data/rankings.json"
    private playersPath = "src/data/players.json"
    private gamesPath = "src/data/games.json"

    constructor(){
    }

    async getRankings(){
        const content: string = await fs.readFile(this.rankingsPath, "utf-8")
        const data: Rankings = JSON.parse(content)
        if (data.rankings){
            return data
        }else{
            return {
                rankings: []
            }
        } 
    }

    async getPlayers(){
        const content: string = await fs.readFile(this.playersPath, "utf-8")
        const data: Player[] = JSON.parse(content)
        if (data.length){
            return data
        }else{
            return []
        } 
    }

    async getGames(){
        const content: string = await fs.readFile(this.gamesPath, "utf-8")
        const data: Game[] = JSON.parse(content)
        if (data.length){
            return data
        }else{
            return []
        } 
    }

    async rewriteRankings(rankings: Rankings){
        const content = JSON.stringify(rankings)
        await fs.writeFile(this.rankingsPath, content)
    }


}