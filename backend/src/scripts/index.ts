import playersController from "../controllers/playersController.ts"
import rankingController from "../controllers/rankingController.ts"
import type Rankings from "../models/entities/Rankings.ts"


//this script is for testing functionality. it will rewrite existing ratings
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

playersController.getPlayers().then(response => console.log(response))