import type Rankings from "../models/entities/Ratings.ts";
import type Player from "../models/entities/Player.ts";
import type Game from "../models/entities/Game.ts";

export default interface RepoInterface{
    getRatings(): Promise<Rankings>,
    getPlayers(): Promise<Player[]>,
    getGames(): Promise<Game[]>,
    addPlayer(player: Player): Promise<void>,
    addGame(game: Game): Promise<void>,
    rewriteRatings(rankings: Rankings): Promise<void>
}