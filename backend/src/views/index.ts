import rankingController from "../controllers/rankingController.ts"
import type Rankings from "../models/entities/Rankings.ts"

console.log("lets check ratings")

const testRankings:Rankings = {
    rankings: [
        {
            player: {
                name: "Elzaor"
            },
            mmr: 1000
        },
        {
            player: {
                name: "Sanya"
            },
            mmr: 1100
        }
    ]
}

rankingController.rewriteRankings(testRankings)

rankingController.getRankings().then(response => {
    console.log(response.rankings)
})
