import BaseGame from "../model/BaseGame.js";

class App {
    async play() {
        await BaseGame.playBaseGame()
    }
}

export default App;