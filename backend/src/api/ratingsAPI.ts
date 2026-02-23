import express from "express"
import dotenv from "dotenv"
import ratingController from "../controllers/ratingController.ts"
import Game from "../models/entities/Game.ts"
dotenv.config()
const PORT = process.env.EXPRESS_PORT || 3000

const app = express()

app.use(express.json()) 


app.get("/ratings", async (req, res) => {
    const ratings = await ratingController.getRatings()
    res.status(201).send(ratings)
})

app.post("/game", async (req, res) => {
    const game = new Game(req.body.id, req.body.result)
    await ratingController.updateRatings(game)
    const updatedRatings = await ratingController.getRatings()
    res.status(201).send(updatedRatings)
})

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))