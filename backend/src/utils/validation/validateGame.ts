import type Game from "../../models/entities/Game.ts";

export default function validateGame(game: Game){
    const result = game.getResult()
    const lobbySize = result ? Object.keys(result).length : 0
    const positionsSet = new Set(result ? Object.values(result) : [])
    for (let i = 1; i <= lobbySize; i++){
        if (!positionsSet.has(i)){
            return false
        }
    }
    return true
}