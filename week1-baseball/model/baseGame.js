import { playGame } from "../service/baseballService"

class BaseGame {
    constructor() {
    }

    static async playBaseGame() {
        await playGame()
    }
}

export default BaseGame