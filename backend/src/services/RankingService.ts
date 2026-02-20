import type RepoInterface from "../repositories/RepoInterface.ts"
import type Rankings from "../models/entities/Rankings.ts"
import type Game from "../models/entities/Game.ts"

class RankingService {

    private repo: RepoInterface

    constructor(repo: RepoInterface){
        this.repo = repo
    }

    async getRankings(){
        const data = await this.repo.getRankings()
        return data
    }

    async rewriteRankings(rankings: Rankings){
        this.repo.rewriteRankings(rankings)
    }

    async updateRankings(game: Game){
        const rankings = await this.getRankings()
        this.repo.rewriteRankings(rankings)
    }
}

export default RankingService