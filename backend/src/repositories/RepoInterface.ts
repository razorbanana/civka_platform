import type Rankings from "../models/entities/Rankings.ts";

export default interface RepoInterface{
    getAll(): Promise<Rankings>,
    rewriteRankings(rankings: Rankings): Promise<void>
}