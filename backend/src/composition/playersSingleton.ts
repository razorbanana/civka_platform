import JSONStorage from "../repositories/jsonRepo/JSONRepo.ts"
import PlayerService from "../services/PlayersService.ts"

const jsonStorage = new JSONStorage()
const playersService = new PlayerService(jsonStorage)
export default playersService