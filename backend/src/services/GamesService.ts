import type RepoInterface from "../repositories/RepoInterface.ts"

class GamesService {

    private repo: RepoInterface

    constructor(repo: RepoInterface){
        this.repo = repo
    }

    async getGames(){
        const data = await this.repo.getGames()
        return data
    }
}

export default GamesService