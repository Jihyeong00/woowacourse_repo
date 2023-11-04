import RacingGameController from "./controller/RacingGameController.js";

class App {
  async play() {
    await RacingGameController.play()
  }
}

export default App;
