import JSONStorage from "../repositories/jsonRepo/JSONRepo.ts"
import RatingService from "../services/RatingService.ts"

const jsonStorage = new JSONStorage()
const ratingService = new RatingService(jsonStorage)
export default ratingService