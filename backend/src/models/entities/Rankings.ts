import type Player from "./Player.ts"

type Ranking = {
    player: Player,
    mmr: number
}

export default interface Rankings {
    rankings: Array<Ranking>
}