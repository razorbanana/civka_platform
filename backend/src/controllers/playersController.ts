import playersService from "../composition/playersSingleton.ts"

class PlayersController {
    async getPlayers(){
        const data = await playersService.getPlayers()
        return data
    }
}

const playersController = new PlayersController()

export default playersController