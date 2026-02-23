import Game from "../models/entities/Game.ts";
import validateGame from "../utils/validation/validateGame.ts";

const result1 = {
    "player1": 1,
    "player2": 2
}

const result2 = {
    "player1": 3,
    "player2": 2
}

const game1: Game = new Game("dfskdf", result1)
const game2: Game = new Game("fsdfs", result2)

console.log(`val1: ${validateGame(game1)}`)
console.log(`val2: ${validateGame(game2)}`)