import type Rankings from "../models/entities/Rankings.ts";
import type Player from "../models/entities/Player.ts";
import type Game from "../models/entities/Game.ts";

export default interface RepoInterface{
    getRankings(): Promise<Rankings>,
    getPlayers(): Promise<Player[]>,
    getGames(): Promise<Game[]>,
    rewriteRankings(rankings: Rankings): Promise<void>
}