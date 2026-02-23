import type { RatingsDTO } from "../dto/RatingsDTO.ts"

interface RatingsInterface {
    getRatings(): Record<string, number>
}

export default class Ratings implements RatingsInterface{
    private ratings: Record<string, number>

    constructor(ratings: Record<string, number> = {}){
        this.ratings = ratings
    }

    getRatings(): Record<string, number> {
        return this.ratings
    }
}