import type Game from "../../models/entities/Game.ts";

export default function validateGame(game: Game){
    const result = game.getResult()
    const lobbySize = Object.keys(result).length
    if (lobbySize === 0){
        console.log("lobby size is 0");
        return false
    }
    const positionsSet = new Set(result ? Object.values(result) : [])
    for (let i = 1; i <= lobbySize; i++){
        if (!positionsSet.has(i)){
            console.log("positions are incorrect");
            return false
        }
    }
    return true
}