import type RepoInterface from "../repositories/RepoInterface.ts"

class PlayersService {

    private repo: RepoInterface

    constructor(repo: RepoInterface){
        this.repo = repo
    }

    async getPlayers(){
        const data = await this.repo.getPlayers()
        return data
    }
}

export default PlayersService