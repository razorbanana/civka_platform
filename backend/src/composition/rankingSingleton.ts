import JSONStorage from "../repositories/jsonRepo/JSONRepo.ts"
import RankingService from "../services/RankingService.ts"

const jsonStorage = new JSONStorage()
const rankingService = new RankingService(jsonStorage)
export default rankingService