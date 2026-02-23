import type Game from "../../models/entities/Game.ts";
import Ratings from "../../models/entities/Ratings.ts";

type MonstosityItemType = {
    score: number,
    mmr: number,
    averageOpponentMmr: number,
}

export default function calculateRatings(oldRatingsInstance: Ratings, game: Game): Ratings{
    const k = 50
    const result = game.getResult()
    //console.log(`result is ${JSON.stringify(result)}`)
    const lobbySize = Object.keys(result).length
    //console.log(`lobbySize is ${lobbySize}`);
    const oldRatings = oldRatingsInstance.getRatings()
    //console.log(`oldRatings is ${JSON.stringify(oldRatings)}`);

    function normScore(score: number = 0){
        return (lobbySize - score)/(lobbySize - 1)
    }

    function calculateExpectedScore(playerRating: number, opponentRating: number){
        return 1/(1+10**((opponentRating - playerRating)/400))
    }

    function calculateNewRating(playerRating: number, score: number, expectedScore: number){
        return playerRating + k*(score-expectedScore)
    }

    const monstrosity: Record<string, MonstosityItemType> = {}
    Object.keys(result).map(key => {
        console.log(`creating moster for ${key}`);
        const obj: MonstosityItemType = {
            score: normScore(result[key]),
            mmr: oldRatings[key] ? oldRatings[key] : 1000,
            averageOpponentMmr: Object.keys(result).reduce((acc, item) => {
                if (key != item){
                    console.log(`${key}'s opponent is ${item}`)
                    let opponentMMR = oldRatings[item] ? oldRatings[item] : 1000
                    console.log(`${key}'s opponent mmr is ${JSON.stringify(opponentMMR)}`)
                    return acc + opponentMMR
                }
                return acc
            }, 0)/(lobbySize-1)
        }
        monstrosity[key] = obj
    })
    //console.log(monstrosity);

    const newRatings: Record<string, number> = structuredClone(oldRatings)
    Object.keys(monstrosity).map(key => {
        const rating = calculateNewRating(monstrosity[key]!.mmr, monstrosity[key]!.score, calculateExpectedScore(monstrosity[key]!.mmr, monstrosity[key]!.averageOpponentMmr))
        newRatings[key] = rating
    })
    //console.log(newRatings);

    const finalResult = new Ratings(newRatings)

    return finalResult

}