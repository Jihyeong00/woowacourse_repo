import ChristmasService from './controller/ChristmasService.js';

class App {
  async run() {
    await ChristmasService.play();
  }
}

export default App;
