import axios from "axios"
import type { Game } from "../model/types/Game"

const PORT = import.meta.env.VITE_EXPRESS_PORT
const baseURL = `http://localhost:${PORT}`

async function getRatings(){
    try {
        const response = await axios.get(`${baseURL}/ratings`)
        return response.data
    }catch(err){
        console.error(err)
    }
}

async function postGame(game: Game){
    try{
        const response = await axios.post(`${baseURL}/game`, game)
        return response.data
    }catch(err){
        console.error(err)
    }
}

export {getRatings, postGame}