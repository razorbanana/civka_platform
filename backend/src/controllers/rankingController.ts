import rankingService from "../composition/rankingSingleton.ts"
import type Rankings from "../models/entities/Rankings.ts"

class RankingController {
    async getRankings(){
        const data = await rankingService.getRankings()
        return data
    }

    async rewriteRankings(rankings: Rankings){
        rankingService.rewriteRankings(rankings)
    }
}

const rankingController = new RankingController()

export default rankingController