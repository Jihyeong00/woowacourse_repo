import LottoController from './controller/lottoController.js';

class App {
  async play() {
    const lottoGame = new LottoController();
    await lottoGame.play();
  }
}

export default App;
