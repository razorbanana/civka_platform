import {promises as fs} from "fs"
import type Rankings from "../../models/entities/Rankings.ts"
import type RepoInterface from "../RepoInterface.ts"

export default class JSONStorage implements RepoInterface{

    private path: string

    constructor(path = "src/data/rankings.json"){
        this.path = path
    }

    async getAll(){
        const content: string = await fs.readFile(this.path, "utf-8")
        const data: Rankings = JSON.parse(content)
        if (data.rankings){
            return data
        }else{
            return {
                rankings: []
            }
        } 
    }

    async rewriteRankings(rankings: Rankings){
        const content = JSON.stringify(rankings)
        await fs.writeFile(this.path, content)
    }
}