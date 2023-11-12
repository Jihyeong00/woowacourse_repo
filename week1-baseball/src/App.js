import BaseGame from '../model/baseGame';
import { InputView } from '../view/inputView';
import randomNumberMaker from '../util/randomNumberMaker'
import { OutputView } from '../view/outputView';

class App {
    #isTry
    #baseBallService
    constructor(){
        this.#isTry = true
        const strikeNumber = randomNumberMaker();
        this.#baseBallService = new BaseGame(strikeNumber);
    }

    async #baseBallPlay(){
        while (true) {
            const inputNumber = await InputView.readInputNumber();
            const checkResult = this.#baseBallService.getCheckResult(inputNumber);
            if (checkResult === '3스트라이크') break;
        }
    }
    async play() {
        while (this.#isTry) {
            OutputView.startGame()
            await this.#baseBallPlay()
            const isRetry = await InputView.retryGame();
            if (isRetry == 2) this.#isTry = false
        }
    }
}

export default App;


const app = new App()

app.play()