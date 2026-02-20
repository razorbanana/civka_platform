import type storageInterface from "../repositories/RepoInterface.ts"
import type Rankings from "../models/entities/Rankings.ts"

class RankingService {

    private repo: storageInterface

    constructor(repo: storageInterface){
        this.repo = repo
    }

    async getRankings(){
        const data = await this.repo.getAll()
        return data
    }

    async rewriteRankings(rankings: Rankings){
        this.repo.rewriteRankings(rankings)
    }
}

export default RankingService