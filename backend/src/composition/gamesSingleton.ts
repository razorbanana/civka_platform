import JSONStorage from "../repositories/jsonRepo/JSONRepo.ts"
import GamesService from "../services/GamesService.ts"

const jsonStorage = new JSONStorage()
const gamesService = new GamesService(jsonStorage)
export default gamesService